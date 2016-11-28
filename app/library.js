module.exports = {
car: function(name, model, category){

           this.name: "",
           this.model: "",
           this.category: "",
           this.numOfDoors: 4,
           this.numOfWheels: 4,
           this.speed: 0,
           
           drive: function (value) {
                this.speed = value;
                return this;
           }

           if (typeof name === 'string') {
                this.name = name;
            }

            if (value === null || typeof value === 'undefined') {
                this.name = "General";
            }

            if (typeof model === 'string') {
                this.model = model;

                if ( model === 'Porshe' || model === 'Koenigsegg') {
                    this.numOfDoors = 2;
                }
            }
            
            if (typeof category === 'string') {
                this.category = category;

                if ( category === 'trailer') {
                    this.numOfWheels = 8;
                }
            }

    }
}