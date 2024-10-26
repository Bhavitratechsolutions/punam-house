

// export const CompanyApiList = async() =>{
    
//    return await axios.get('/api/company');

   
   
// }

// export default CompanyApiList;


// import { Demo } from '@/types';

// export const CustomerService = {
//     getCustomersMedium() {
//         return fetch('/demo/data/customers-medium.json', { headers: { 'Cache-Control': 'no-cache' } })
//             .then((res) => res.json())
//             .then((d) => d.data as Demo.Customer[]);
//     },

//     getCustomersLarge() {
//         return fetch('/demo/data/customers-large.json', { headers: { 'Cache-Control': 'no-cache' } })
//             .then((res) => res.json())
//             .then((d) => d.data as Demo.Customer[]);
//     }
// };




export const ApiList = {
   
    getCompanyList() {
        return fetch('/api/company', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            
    }
};

