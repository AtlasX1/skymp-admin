const set = (data, name) => localStorage.setItem(name, JSON.stringify(data));

const get = (data) => JSON.parse(localStorage.getItem(data));

const storage = {
  set,
  get,
};

export default storage;
