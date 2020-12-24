//Singleton
const Singleton = (() => {
    const uniqueKey = Symbol('instance');
    let instance;
    function Singleton(key) {
      if(key !== uniqueKey) throw new Error('You should you instance static method instead');
    };
   
   Singleton.getInstance = () => {
     instance ? instance : (instance = new Singleton(uniqueKey));
   }
   
   return Singleton;
 })();
 
 console.log(Singleton.getInstance() === Singleton.getInstance());


//Interator task

const weapon = {
  
	modifications: ['total power', 'giant bullet', 'giant bullet','giant bullet','giant bullet','shit'],
  type: ['boom','giant bullet','giant bullet', 'some'],
  [Symbol.iterator]() {
    const copy = this.modifications.slice();
    const some = this.type.slice();
    return {
      next: () => {
        const value = [...new Set([...copy, ...some])];
        return { 
          done: value,
        };
      },
    };
  },
};


const allProperties = (weapon[Symbol.iterator]()).next(); // ['total power', 'giant bullet', 'boom']
console.log(allProperties);
