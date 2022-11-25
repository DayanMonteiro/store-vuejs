<template>
  <div>
    <form class="form">
      <div class="containerForm">
        <div class="leftColumn">
            <div> 
            <label>Nome*</label><br />
            <input
              type="text"
              class="inputLong"
              v-model.trim="form.name"
              @input="$v.form.name.$touch()"
            />
          </div>

          <div> 
            <label>Email*</label><br />
            <input
              type="text"
              class="inputLong"
              v-model.trim="form.email"
              @input="$v.form.email.$touch()"
            />
          </div>

          <div>   
            <label>CPF*</label><br />
            <input
              v-mask="'###.###.###-##'"
              type="text"
              class="inputLong"
              v-model.trim="form.cpf"
              @input="$v.form.cpf.$touch()"
            />
          </div>

          <div class="towInputs">
            <div>   
              <label>Data de Nascimento*</label><br />
              <input
                v-mask="'##/##/####'"
                type="text"
                class="inputMedium"
                v-model.trim="form.birthDate"
                @input="$v.form.birthDate.$touch()"
              />
            </div>

            <div>   
              <label>Telefone*</label><br />
              <input
                v-mask="['(##) #####-####', '(##) ####-####']"
                type="text"
                class="inputMedium"
                v-model.trim="form.telephone"
                @input="$v.form.telephone.$touch()"
              />
            </div>
          </div>
        </div>

         <div class="rightColumn">
            <div>  
              <label>CEP*</label><br />
              <input
                v-mask="'##.###-###'"
                type="text"
                class="inputLong"
                v-model.trim="form.cep"
                @input="$v.form.cep.$touch()"
              />
            </div>

          <div class="towInputs">
            <div>
              <label>Endereço*</label><br />
              <input
                type="text"
                class="inputXMedium"
                v-model.trim="form.address"
                @input="$v.form.address.$touch()"
              />
            </div>

            <div>
              <label>Número*</label><br />
              <input
                type="text"
                class="inputSmall"
                v-model.trim="form.number"
                @input="$v.form.number.$touch()"
              />
            </div>
          </div>

          <div class="towInputs">
            <div>
              <label>Complemento</label><br />
              <input
                type="text"
                class="inputMedium"
                v-model.trim="form.complement"
                @input="$vcomplement.$touch()"
              />
            </div>

            <div>
              <label>Bairro*</label><br />
              <input
                type="text"
                class="inputMedium"
                v-model.trim="form.district"
                @input="$v.form.district.$touch()"
              />
            </div>
          </div>

          <div class="towInputs">
            <div>
              <label>Cidade*</label><br />
              <input
                type="text"
                class="inputXMedium"
                v-model.trim="form.city"
                @input="$v.form.city.$touch()"
              />
            </div>

            <div> 
              <label>Estado*</label><br />
              <input
                type="text"
                class="inputSmall"
                v-model.trim="form.state"
                @input="$v.form.state.$touch()"
              />
            </div>
          </div>
        </div> 
      </div>

      <div class="containerButton">
        <button type="submit">
          Concluir compra
        </button>
      </div>
    </form>
  </div>
</template>

<script type="text/javascript">

import { mask } from "vue-the-mask";

export default {
  name: "CheckoutFormMobile",

  directives: { mask },

  data() {
    return {
      form: {
        name: "",
        email: "",
        cpf: "",
        birthDate: "",
        telephone: "",
        cep: "",
        address: "",
        number: "",
        complement: "",
        district: "",
        city: "",
        state: "",
      },
    };
  },

  validations: {},

  methods: {},
};
</script>

<style lang="scss" scoped>

@font-face {
    font-family: 'SoucerSansPro-Regular';
    src: url('../../resources/fonts/SourceSansPro-Regular.ttf') format('truetype');
  }
.form {
  margin-top: 8rem;
  margin-bottom: 8rem;
}

.containerForm {
  display: flex;
  justify-content: space-between;
  font-family: 'SoucerSansPro-Regular';

  @media only screen and (min-width: 360px) {
    width: 20rem ;
    flex-direction: column;
  }

  @media only screen and (min-width: 640px) {
    width: 30rem ;
  }

  @media only screen and (min-width: 910px) {
    width: 38rem ;
  }

  @media only screen and (min-width: 1080px) {
    flex-direction: row;
    justify-content: space-between;
    width: 42rem;
  }

  @media only screen and (min-width: 1360px) {
    width: 50rem;
  }

  @media only screen and (min-width: 1640px) {
    width: 58rem;
  }

  @media only screen and (min-width: 1780px) {
    width: 65rem;
  } 

}

.leftColumn {
  @media only screen and (min-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

.rightColumn {

  @media only screen and (min-width: 1080px) {
    display: flex;
    flex-direction: column; 
  }
}
.inputLong {
  float: left;
  margin-top: 0.3rem;
  margin-bottom: 1rem;
  padding-left: 1rem;
  font-style: italic;
  font-size: 18px;
  height: 2.5rem;
  border-radius: 0.2rem;
  border: 1px solid gray;
  font-family: 'SoucerSansPro-Regular';

  @media only screen and (min-width: 360px) {
    width: 19rem;
  }

  @media only screen and (min-width: 640px) {
    width: 29rem;
  }

  @media only screen and (min-width: 910px) {
   width: 37rem;
  }

  @media only screen and (min-width: 1080px) {
    width: 19rem;
  }

  @media only screen and (min-width: 1360px) {
    width: 23rem;
  }

  @media only screen and (min-width: 1640px) {
    width: 27rem;
  }

  @media only screen and (min-width: 1780px) {
    width: 30rem;
  }

}

.inputXMedium {
  float: left;
  margin-top: 0.3rem;
  margin-bottom: 1rem;
  padding-left: 1rem;
  font-style: italic;
  font-size: 18px;
  height: 2.5rem;
  border-radius: 0.2rem;
  border: 1px solid gray;
  font-family: 'SoucerSansPro-Regular';

  @media only screen and (min-width: 360px) {
    width: 9rem;
  }

  @media only screen and (min-width: 640px) {
    width: 17rem;
  }

  @media only screen and (min-width: 910px) {
    width: 25rem;
  }

  @media only screen and (min-width: 1080px) {
    width: 10rem;
  }

  @media only screen and (min-width: 1360px) {
    width: 12rem;
  }

  @media only screen and (min-width: 1640px) {
    width: 17rem;
  }

  @media only screen and (min-width: 1780px) {
    width: 19rem;
  }

}
.inputMedium {
  float: left;
  margin-top: 0.3rem;
  margin-bottom: 1rem;
  padding-left: 1rem;
  font-style: italic;
  font-size: 18px;
  height: 2.5rem;
  border-radius: 0.2rem;
  border: 1px solid gray;
  font-family: 'SoucerSansPro-Regular';

  @media only screen and (min-width: 360px) {
    width: 8rem;
  }

  @media only screen and (min-width: 640px) {
    width: 13rem;
  }

  @media only screen and (min-width: 910px) {
    width: 17rem;
  }

  @media only screen and (min-width: 1080px) {
    width: 8rem;
  }

  @media only screen and (min-width: 1360px) {
    width: 10rem;
  }

  @media only screen and (min-width: 1640px) {
    width: 12rem;
  }

  @media only screen and (min-width: 1780px) {
   width: 13.5rem;
  }

}

.inputSmall {
  float: left;
  margin-top: 0.3rem;
  margin-bottom: 1rem;
  padding-left: 1rem;
  font-style: italic;
  font-size: 18px;
  height: 2.5rem;
  border-radius: 0.2rem;
  border: 1px solid gray;
  font-family: 'SoucerSansPro-Regular';

  @media only screen and (min-width: 360px) {
    width: 7rem;
  }

  @media only screen and (min-width: 640px) {
    width: 9rem;
  }

  @media only screen and (min-width: 1080px) {
    width: 6rem;
  }

  @media only screen and (min-width: 1360px) {
    width: 8rem;
  }


  @media only screen and (min-width: 1640px) {
    width: 7rem;
  }

  @media only screen and (min-width: 1780px) {
   width: 8rem;
  }

}

.towInputs {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}

label {
  color: #909090;
}
.fld-error .msg-error {
  display: block;
}
.msg-error {
  display: none;
}

.containerButton {
  display: flex;
  justify-content: flex-end;
}

button {
  background-color: #8a2be2;
  color: #fff;
  width: 20rem;
  height: 3rem;
  border-radius: 0.2rem;
  margin-top: 0.1rem;
  font-family: 'SoucerSansPro-Regular';
  border: none;
}
</style>
