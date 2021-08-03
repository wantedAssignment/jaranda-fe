export class UserStorage {
  constructor(name) {
    this.name = name;
    this.arr = this.getAll() || [];
  }

  // 아이템을 넘겨주면 LocalStorage에 Object로 저장
  save(item) {
    if (this._checkExistId(item.id)) return;
    this.arr.push(item);
    const result = this._changeToObject(this.arr);
    this._setDataAtStorage(result);
  }

  // LocalStorage의 모든 정보를 Array로 리턴
  getAll() {
    const data = this._getDataFromStorage(); // obj
    if (!data) return;
    const result = this._changeToArray(data);

    return result;
  }

  // localStorage 데이터 교체
  replaceAll(arr) {
    localStorage.removeItem(this.name);
    localStorage.setItem(this.name, JSON.stringify(arr));
  }

  _getDataFromStorage() {
    return JSON.parse(localStorage.getItem(this.name));
  }

  _setDataAtStorage(obj) {
    localStorage.setItem(this.name, JSON.stringify(obj));
  }

  _checkExistId(newId) {
    const arr = this.getAll();
    const isExist = arr.some(item => item.id === newId);

    return isExist;
  }

  _changeToArray(obj) {
    const arr = Object.keys(obj).map(key => {
      const item = {
        id: obj[key].id,
        name: obj[key].name,
        address: obj[key].address,
        role: obj[key].role,
        age: obj[key].age,
        card: { ...obj[key].card },
      };
      return item;
    });

    return arr;
  }

  _changeToObject(arr) {
    let result = {};
    arr.forEach(item => {
      result[item.id] = {
        name: item.name,
        address: item.address,
        role: item.role,
        age: item.age,
        card: { ...item.card },
      };
    });

    return result;
  }
}
