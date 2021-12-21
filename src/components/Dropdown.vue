<template>
  <v-container fluid>
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        sm="3"
      >
        <v-combobox v-model="selectedCountry" @change="onChange($event)" outlined :items="country" dense
        placeholder="Country"
        >
        </v-combobox>
      </v-col>
      <v-col
        class="d-flex"
        cols="12"
        sm="3"
      >
        <v-combobox v-model="selectedCity"
          outlined
          placeholder="City"
          dense
          :items="cities"
        >
        </v-combobox>
      </v-col>
      <v-col
        class="d-flex"
        cols="12"
        sm="3"
      >
        <v-combobox v-model="selectedSpeciality"
          outlined
          placeholder="Specitality"
          dense
          :items="specitality"
        >
        </v-combobox>
      </v-col>
      <v-col cols="2" class="mb-6">
                <v-btn
                    small
                    style="text-transform: none"
                    class="primary"
                    @click="applyFilters()"
                >
                    Apply Filters
                </v-btn>
            </v-col>
      <p>{{selectedRows}}</p>
    </v-row>
    <v-spacer></v-spacer>
    <v-row align="center">
      <v-col
        class="d-flex ml-15"
        cols="12"
        sm="8"
      >
      <v-text-field
      label="Search"
      append-icon="mdi-magnify"
      clearable
      v-model="search"
      >
      </v-text-field>
      </v-col>
      <v-col
        class="d-flex ml-15"
        cols="12"
        sm="2"
      >
      <download-excel
      type="csv"
      name="TableData.csv"
      :data="tableData"
      >
      <v-btn outlined small color="success">
          <v-icon light>mdi-file-excel</v-icon>
        Download
      </v-btn>
      </download-excel>
      </v-col>
    </v-row>

        <v-data-table 
        :search="search"
        v-model="selectedRows"
        :headers="headers"
        :items="tableData"
        :single-select="singleSelect"
        item-key="stadium"
        show-select
        @click:row="rowClick"
        class="elevation-1 mx-2 px-2 text-center"
        >
        </v-data-table>

  </v-container>
  
</template>

<script>
export default {
    name: "Dropdown",
    data: () => ({
      singleSelect:false,
      selectedRows:[],
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      country:['India','Australia','New Zealand'],
      countryData:[
          {
              country:'India',
              cities:['Kolkata','Delhi','Bangalore']
          },
          {
              country:'Australia',
              cities:['Sydney','Canberra','Brisbane','Perth']
          },
          {
              country:'New Zealand',
              cities:['Auckland','Wellington','Christchurch','Hamilton']
          }


      ],
      specitality:[
          'Sweets',
          'Weather',
          'Places',
          'Pollution',
          'Weather',
          'Capital',
          'Stadium',

      ],
      selectedCountry:'',
      search:"",
      selectedSpeciality:'',
      cities:[],
      selectedCity:'',
      headers: [
          { text: 'Country', value: 'country' },
          { text: 'City', value: 'city' },
          { text: 'Speciality', value: 'speciality' },
          { text: 'Stadium', value: 'stadium' },
        ],
        tableData: [
            {
            country: 'India',
            city: 'Kolkata',
            speciality: 'Sweets',
            stadium: 'Eden Gardens',
            },
            {
            country: 'India',
            city: 'Bangalore',
            speciality: 'Weather',
            stadium: 'Chinnaswamy',
            },
            {
            country: 'India',
            city: 'Kolkata',
            speciality: 'Places',
            stadium: 'Saltlake Stadium',
            },
            {
            country: 'India',
            city: 'Delhi',
            speciality: 'Pollution',
            stadium: 'Feroz Shah Kotla',
            },
            {
            country: 'Australia',
            city: 'Sydney',
            speciality: 'Places',
            stadium: 'SCG',
            },
            {
            country: 'Australia',
            city: 'Melbourne',
            speciality: 'Weather',
            stadium: 'MCG',
            },
            {
            country: 'Australia',
            city: 'Canberra',
            speciality: 'Capital',
            stadium: 'Canberra Stadium',
            },
            {
            country: 'New Zealand',
            city: 'Hamilton',
            speciality: 'Stadium',
            stadium: 'Hamilton Stadium',
            },
            {
            country: 'New Zealand',
            city: 'Christchurch',
            speciality: 'Places',
            stadium: 'Christchurch Stadium',
            },
            {
            country: 'New Zealand',
            city: 'Wellington',
            speciality: 'Capital',
            stadium: 'Wellington Stadium',
            },
        ],
    }),
    methods: {
        onChange(event) {
            console.log(event);
            this.selectedCity=''
            const indexOfCountry = this.country.indexOf(this.selectedCountry)
            this.cities = this.countryData[indexOfCountry].cities
        },
        rowClick: function (item, row) {  
            console.log(item,row)    
            row.select(true);
        },
        applyFilters(){
            console.log(this.selectedCountry,this.selectedCity,this.selectedSpeciality)
            this.tableData = this.tableData.filter((data)=>{
                return (data.city==this.selectedCity || this.selectedCity=='') && (data.country==this.selectedCountry ||this.selectedCountry=='') && 
                (data.speciality==this.selectedSpeciality|| this.selectedSpeciality=='')
            })
            console.log(this.tableData)

        }
    },
    watch : {  
        selectedRows:function() {  
            Object.values(this.selectedRows).map((item) => {
                console.log(item.city,item.country,item.stadium)
            })
        },
    }  
    
}
</script>

<style>

</style>