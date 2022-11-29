export const Image_data = {
   Image: require("./images/004_villa.jpg")
}
export const Image_profile = {
   Image: require("./images/vin.jpg")
}


export const Villa_API = [
   {
      id:1, 
      image:require("./images/001_villa.jpg"), 
      description:'Villa Jane will astonish every guest with its breathtaking views',
      price:'$2000',
      location:'Aspen',
      badroom:5,
      totalArea: 7600,
      detailsDescription:'A chalet-style Aspen home that combines privacy with in-town'
   },
   {
      id:2, 
      image:require("./images/002_villa.jpg"), 
      description:'An ultra-exclusive mountain home Ranch-inspired luxury living',
      price:'$3500',
      location:'Aspen',
      badroom:5,
      totalArea: 7600,
      detailsDescription:'A chalet-style Aspen home that combines privacy with in-town'
   },
   {
      id:3, 
      image:require("./images/003_villa.jpg"), 
      description:'Villa Jane will astonish every guest with its breathtaking views',
      price:'$9000',
      location:'Gurjaani',
      badroom:5,
      totalArea: 7600,
      detailsDescription:'A chalet-style Aspen home that combines privacy with in-town'
   },
   {
      id:4, 
      image:require("./images/004_villa.jpg"), 
      description:'An ultra-exclusive mountain home Ranch-inspired luxury living',
      price:'$1700',
      location:'Batumi',
      badroom:5,
      totalArea: 7600,
      detailsDescription:'A chalet-style Aspen home that combines privacy with in-town'
   },
   {
      id:5, 
      image:require("./images/005_villa.jpg"), 
      description:'Villa Jane will astonish every guest with its breathtaking views',
      price:'$3600',
      location:'Lagodekhi',
      badroom:5,
      totalArea: 7600,
      detailsDescription:'A chalet-style Aspen home that combines privacy with in-town'
   },
   {
      id:6, 
      image:require("./images/006_villa.jpg"), 
      description:'An ultra-exclusive mountain home Ranch-inspired luxury living',
      price:'$1200',
      location:'Sagarejo',
      badroom:5,
      totalArea: 7600,
      detailsDescription:'A chalet-style Aspen home that combines privacy with in-town'
   },
   {
      id:7, 
      image:require("./images/007_villa.jpg"), 
      description:'Villa Jane will astonish every guest with its breathtaking views',
      price:'$4000',
      location:'Rustavi',
      badroom:5,
      totalArea: 7600,
      detailsDescription:'A chalet-style Aspen home that combines privacy with in-town'
   },
   {
      id:8, 
      image:require("./images/008_villa.jpg"), 
      description:'An ultra-exclusive mountain home Ranch-inspired luxury living',
      price:'$2000',
      location:'Tbilisi',
      badroom:5,
      totalArea: 7600,
      detailsDescription:'A chalet-style Aspen home that combines privacy with in-town'
   },
   {
      id:9, 
      image:require("./images/009_villa.jpg"), 
      description:'Villa Jane will astonish every guest with its breathtaking views',
      price:'$8000',
      location:'Borjomi',
      badroom:5,
      totalArea: 7600,
      detailsDescription:'A chalet-style Aspen home that combines privacy with in-town'
   },
   {
      id:10, 
      image:require("./images/010_villa.jpg"), 
      description:'An ultra-exclusive mountain home Ranch-inspired luxury living',
      price:'$5000',
      location:'Bakuriani',
      badroom:5,
      totalArea: 7600,
      detailsDescription:'A chalet-style Aspen home that combines privacy with in-town'
   }
]

export const BookingData = [
   {
      id:32,
      image:require("./images/010_villa.jpg"),
      price:7600,totalPrice:16200,checkInDate:'',
      checkOutDate:'',
      location:'Bakuriani',
      detailsDescription:'A chalet-style Aspen home that combines privacy with in-town'
   }
]

export const AddVilla = async (item) => {
   return(
   console.log(item),
   console.log('item from addvilla'),
    BookingData.push(item)
   )
}