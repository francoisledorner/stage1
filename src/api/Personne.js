export default class Personne {
  constructor(id, name, date, profession) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.profession = profession;
  }
  Personne() {
    return `${this.id} ${this.name} ${this.date} ${this.profession}`;
  }
}
export const A = "A";
