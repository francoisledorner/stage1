<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <table id="firstTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Profession</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td>{{row.id}}</td>
          <td>{{row.name}}</td>
          <td>{{row.date}}</td>
          <td>{{row.profession}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from "moment";
import Personne from "@/api/Personne";
import { create } from "domain";
const minYear = 216; // 18 ans min
const maxYear = 780; // 60 ans max
const minMinutes = 1440; // 1 jour min
const maxMinutes = 44640; // 31 jours max
const minSeconds = 60; // 1 minute min
const maxSeconds = 86400; // 1 jour max
const str =
  "Software developer,Medical services manager,Registered nurse,Medical technologist,Construction laborer,Nursing assistant,Accountant,Aerospace Engineer,Agricultural Lender,Phone Banker,Mechanical Engineer,Chemical Engineer";
const minNoJobs = 0;
const maxNoJobs = 12;
export default {
  name: "MyTable",
  data() {
    return {
      rows: [
        new Personne(1, "Chandler Bing", this.randomDate(), this.randomJob()),
        new Personne(2, "Ross Geller", this.randomDate(), this.randomJob()),
        new Personne(3, "Rachel Green", this.randomDate(), this.randomJob()),
        new Personne(4, "Monica George", this.randomDate(), this.randomJob()),
        new Personne(5, "Joey Tribbiani", this.randomDate(), this.randomJob()),
        new Personne(6, "Phoebe Buffay", this.randomDate(), this.randomJob())
      ]
    };
  },
  methods: {
    randomDate() {
      let v = moment()
        .subtract("month", this.getRdyear())
        .add("seconds", this.getRdseconds())
        .add("minutes", this.getRdminutes());

      return v.toDate();
    },
    getRdyear() {
      let randomYear =
        Math.floor(Math.random() * (+maxYear - +minYear)) + +minYear;
      return randomYear;
    },
    getRdminutes() {
      let randomMinutes =
        Math.floor(Math.random() * (+maxMinutes - +minMinutes)) + +minMinutes;
      return randomMinutes;
    },
    getRdseconds() {
      let randomSeconds =
        Math.floor(Math.random() * (+maxSeconds - +minSeconds)) + +minSeconds;
      return randomSeconds;
    },
    randomJob() {
      let arr = str.split(",");
      return arr[this.randomMetier()];
    },
    randomMetier() {
      let randomNoJobs =
        Math.floor(Math.random() * (+maxNoJobs - +minNoJobs)) + +minNoJobs;
      return randomNoJobs;
    }
  }
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table {
  font-family: "Open Sans", sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475c;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475c;
  color: #fff;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7d82a8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #d4d8f9;
}
</style>
