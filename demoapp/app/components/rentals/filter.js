import Component from "@glimmer/component";

export default class RentalsFilterComponent extends Component{
    get result(){
        let { rentals,query } = this.args;
        console.log("Rentals : " + rentals);
        console.log("Query : " + query);
        if(query){
            rentals = rentals.filter((rental)=>rental.title.toLowerCase().includes(query.toLowerCase()));
        }
        return rentals;
    }
}