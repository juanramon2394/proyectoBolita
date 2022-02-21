<template>
  <v-row>
    <v-col class="d-flex flex-column">
      <v-spacer></v-spacer>
      <v-row>
        <v-col>
          <v-card
            flat
            class="mx-auto radius"
            width="1000"
            elevation="22"
            shaped
          >
            <v-container fluid>
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="numeroLista"
                    label="Lista"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field v-model="dia" label="Dia"></v-text-field>
                </v-col>

                <v-radio-group v-model="tiempo" row>
                  <v-radio label="AM" value="AM"></v-radio>
                  <v-radio label="PM" value="PM"></v-radio>
                </v-radio-group>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="3">
                  <v-textarea
                    ref="numeros"
                    v-model="numeros"
                    label="Numeros"
                  ></v-textarea>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <v-text-field
                    label="Cantidad"
                    type="number"
                    v-model="dinero"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <v-radio-group v-model="tipo" column>
                    <v-radio label="Fijo" value="F"></v-radio>
                    <v-radio label="Corrido" value="C"></v-radio>
                    <v-radio label="Parlet" value="P"></v-radio>
                    <v-radio label="Centena" value="Ce"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col>
                  <v-row>
                    <v-col>
                      <v-btn
                        class="mt-6 text-capitalize white--text w-100"
                        depressed
                        color="green"
                        @click="aceptar"
                        >Ok</v-btn
                      >
                    </v-col>
                    <v-col>
                      <v-btn
                        class="mt-6 text-capitalize white--text w-100"
                        depressed
                        color="red"
                        @click="clear"
                        >Clear</v-btn
                      >
                    </v-col>
                    <v-col>
                      <template>
                        <div class="text-center">
                          <v-dialog v-model="dialog" width="1000">
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn color="blue" dark v-bind="attrs" v-on="on">
                                Agregar Tiro
                              </v-btn>
                            </template>

                            <v-card>
                              <v-card-title class="text-h5 grey lighten-2">
                                Agregar Tiro {{ this.dia }}
                              </v-card-title>

                              <template>
                                <v-form>
                                  <v-container>
                                    <v-row>
                                      <v-col cols="12" sm="6" md="3">
                                        <v-text-field
                                          label="Centena"
                                          type="number"
                                          v-model="tiroCentena"
                                          outlined
                                        ></v-text-field>
                                      </v-col>

                                      <v-col cols="12" sm="6" md="3">
                                        <v-text-field
                                          label="Corrido 1"
                                          type="number"
                                          v-model="tiroCorridoUno"
                                          outlined
                                        ></v-text-field>
                                      </v-col>
                                      <v-col cols="12" sm="6" md="3">
                                        <v-text-field
                                          label="Corrido 2"
                                          type="number"
                                          v-model="tiroCorridoDos"
                                          outlined
                                        ></v-text-field>
                                      </v-col>
                                      <v-col cols="12" sm="6" md="3">
                                        <v-radio-group v-model="tiempoTiro" row>
                                          <v-radio
                                            label="AM"
                                            value="AM"
                                          ></v-radio>
                                          <v-radio
                                            label="PM"
                                            value="PM"
                                          ></v-radio>
                                        </v-radio-group>
                                      </v-col>
                                    </v-row>
                                  </v-container>
                                </v-form>
                              </template>

                              <v-divider></v-divider>

                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                  text
                                  color="green"
                                  @click="aceptarDialogo"
                                >
                                  ok
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </div>
                      </template>
                    </v-col>
                    <v-col>
                      <template>
                        <div class="text-center">
                          <v-dialog v-model="dialogCalculos" width="500">
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn
                                color="brown"
                                dark
                                v-bind="attrs"
                                v-on="on"
                              >
                                Calculos
                              </v-btn>
                            </template>

                            <v-card>
                              <v-card-title class="text-h5 grey lighten-2">
                                Calculos {{ this.dia }}
                              </v-card-title>

                              <template>
                                <v-form>
                                  <v-container>
                                    <v-row>
                                      <v-col>
                                        <v-radio-group
                                          v-model="tipoCaculos"
                                          row
                                        >
                                          <v-radio
                                            label="AM"
                                            value="AM"
                                          ></v-radio>
                                          <v-radio
                                            label="PM"
                                            value="PM"
                                          ></v-radio>
                                        </v-radio-group>
                                      </v-col>
                                      <v-col>
                                        <v-text-field
                                          label="Limpio Total"
                                          type="number"
                                          v-model="limpioTotal"
                                          outlined
                                        ></v-text-field>
                                      </v-col>
                                      <v-col>
                                        <v-text-field
                                          label="Premio Total"
                                          type="number"
                                          v-model="premioTotal"
                                          outlined
                                        ></v-text-field>
                                      </v-col>
                                    </v-row>
                                    <v-row>
                                      <v-col>
                                        <v-btn
                                          class="mt-6 text-capitalize white--text w-100"
                                          depressed
                                          color="green"
                                          @click="calcularLimpio"
                                          >Calcular Limpio</v-btn
                                        >
                                      </v-col>

                                      <v-col>
                                        <v-btn
                                          class="mt-6 text-capitalize white--text w-100"
                                          depressed
                                          color="green"
                                          @click="calcularPremio"
                                          >Calcular Premio</v-btn
                                        >
                                      </v-col>
                                    </v-row>
                                  </v-container>
                                </v-form>
                              </template>

                              <v-divider></v-divider>

                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                  text
                                  color="green"
                                  @click="aceptarDialogoCalculo"
                                >
                                  ok
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </div>
                      </template>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            flat
            class="mx-auto radius"
            width="1000"
            elevation="22"
            shaped
          >
            <v-container fluid>
              <v-row>
                <v-col>
                  <v-text-field v-model="tiro" label="Tiro"></v-text-field>
                </v-col>

                <v-col>
                  <v-text-field v-model="dia" label="Dia"></v-text-field>
                </v-col>
                <v-col>
                  <v-radio-group v-model="tipoTabla" row>
                    <v-radio label="AM" value="AM"></v-radio>
                    <v-radio label="PM" value="PM"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col>
                  <v-btn
                    class="mt-6 text-capitalize white--text w-100"
                    depressed
                    color="green"
                    @click="llenarTabla"
                    >Llenar Tabla</v-btn
                  >
                </v-col>
              </v-row>
              <v-card>
                <v-card-title>
                  Premios
                  <v-spacer></v-spacer>
                </v-card-title>
                <v-data-table
                  :headers="headers"
                  :items="premios"
                ></v-data-table>
              </v-card>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<style>
.w-100 {
  width: 100%;
}
</style>

<script>
import Vue from "vue";
import Vuex from "vuex";
import { axiosBase } from "../api/axios-base";

Vue.use(Vuex);
export default {
  name: "Login",
  components: {},
  data: () => ({
    limpioTotal: 0,
    premioTotal: 0,
    dialog: false,
    dialogCalculos: false,
    lista: "",
    numeroLista: "",
    tipo: "",
    tipoTabla: "",
    tipoCaculos: "",
    dinero: 0,
    tiempoTiro: "",
    tiroCorridoUno: 0,
    tiroCorridoDos: 0,
    tiroCentena: 0,
    cantFijo: 0,
    tiro: "",
    dia: "",
    tiempo: "",
    cantCorrido: 0,
    cantParlet: 0,
    cantCentenas: 0,
    numeros: "",
    date: "",
    row: null,
    parlet: "",
    centenas: "",
    premios: [],
    headers: [
      { text: "Numero", value: "numero" },
      { text: "Limpio", value: "limpio" },
      { text: "Fijo", value: "fijo" },
      { text: "Corrido", value: "corrido" },
      { text: "Parlet", value: "parlet" },
      { text: "Centena", value: "centena" },
      { text: "Dia", value: "dia" },
      { text: "Tiempo", value: "tiempo" }
    ]
  }),
  computed: {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  mounted() {
    this.getNow();
  },
  methods: {
    getNow: function() {
      const today = new Date();
      const date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.dia = date;
    },
    async aceptar() {
      const arr = [];
      arr.push(
        "numeros" + ":" + this.numeros,
        "dinero" + ":" + this.dinero,
        "numeroLista" + ":" + this.numeroLista,
        "dia" + ":" + this.dia,
        "tiempo" + ":" + this.tiempo,
        "tipo" + ":" + this.tipo
      );
      console.log(arr);
      const response = await axiosBase.post("/api/rest/v1/jugadas", {
        numeros: this.numeros,
        dinero: this.dinero,
        numeroLista: this.numeroLista,
        dia: this.dia,
        tiempo: this.tiempo,
        tipo: this.tipo
      });
      console.log(response);
      this.clearSubmit();
    },
    clear() {
      this.numeros = "";
      this.dinero = 0;
      this.numeroLista = "";
      this.tipo = "";
      this.tiempo = "";
    },
    clearSubmit() {
      this.numeros = "";
      this.dinero = 0;
      this.tipo = "";
    },
    clearTiros() {
      this.tiroCentena = 0;
      this.tiroCorridoUno = 0;
      this.tiroCorridoDos = 0;
      this.tiempoTiro = "";
    },
    async llenarTabla() {
      this.premios = [];
      const response = await axiosBase
        .get("/api/rest/v1/listas/" + this.dia + "/" + this.tipoTabla)
        .then(response => {
          this.premios = response.data;
        });
      console.log(response);
    },
    async aceptarDialogo() {
      this.tiroCentena = 0;
      this.tiroCorridoDos = 0;
      this.tiroCorridoUno = 0;
      const arr = [];
      arr.push(
        "centena" + ":" + this.tiroCentena,
        "corrido1" + ":" + this.tiroCorridoUno,
        "corrido2" + ":" + this.tiroCorridoDos,
        "dia" + ":" + this.dia,
        "tiempo" + ":" + this.tiempoTiro
      );
      console.log(arr);
      const response = await axiosBase.post("/api/rest/v1/tiros", {
        centena: this.tiroCentena,
        corrido1: this.tiroCorridoUno,
        corrido2: this.tiroCorridoDos,
        dia: this.dia,
        tiempo: this.tiempoTiro
      });
      console.log(response);
      this.clearTiros();
      this.dialog = false;
    },
    aceptarDialogoCalculo() {
      this.tipoCaculos = "";
      this.limpioTotal = 0;
      this.premioTotal = 0;
      this.dialogCalculos = false;
    },
    async calcularPremio() {
      const dia = this.dia;
      const tipo = this.tipoCaculos;
      this.premioTotal = 0;
      const response = await axiosBase
        .post("/api/rest/v1/listas/calculate-premio/" + dia + "/" + tipo)
        .then(response => {
          this.premioTotal = response.data;
        });
      console.log(response);
    },
    async calcularLimpio() {
      const dia = this.dia;
      const tipo = this.tipoCaculos;
      this.limpioTotal = 0;
      const response = await axiosBase
        .post("/api/rest/v1/listas/calculate-limpio/" + dia + "/" + tipo)
        .then(response => {
          this.limpioTotal = response.data;
        });
      console.log(response);
    }
  }
};
</script>
