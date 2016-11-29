module.exports = {
car: function(name, model, category, passengers, color, mileage, year){
	    
			this.name = function () { 
				if (this.name === null) {
					this.name = 'General';
				}
				if (this.name === string) {
				  this.name = name;
				}
			};
			this.category = category;
			this.model = function () {
				this.model = model;
				return model};
			this.color = color;
			this.mileage = function() {
				
			this.passengers = passengers;
			this.year = year;
			this.started = false;
			this.start = function() {
				this. started = true;
			};
			this.stop = function() {
				this.started = false;
			};
			this.drive = function() {
				if (this.started) {
				}
			};
			
           
           
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


};



}
}