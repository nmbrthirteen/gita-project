let customers  = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "First Item",
      email: "vivek@pyther.com",
      address: "India",
      phone:'9724232340'
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      name: "Vivek",
      email: "vivek@pyther.com",
      address: "India",
      phone:'9724232340'
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      name: "Rama",
      email: "vivek@pyther.com",
      address: "India",
      phone:'9724232340'
    }
  ];

  export const getCustomers = ()=>(customers);

  export const addCustomer = (customer) =>{
    customers.unshift(customer);
  }

  export const deleteCustomer = (customerId) =>{
    customers = customers.filter((item)=>(item.id != customerId));
  }

  export const updateCustomer = (customer) =>{
    customers = customers.map((item)=>{
        if(item.id === customer.id ){
            return customer;
        }else{
            return item;
        }
    })
  }