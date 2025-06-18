
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

async function productCall(){
 try{
    const respose = await axios.get(`https://fakestoreapi.com/products`);
    return respose.data;
 }catch(e){
    return e;
 }
};

export const productThunk = createAsyncThunk("product", async ()=>{
    return productCall()
})

const productSlice = createSlice({
    name:"product",

    initialState:{
        productData:[],
        loading:false,
        addCardData:[],
        totalPrice:0,
        totalQuantity:0,
        searchData:[],
    },

    reducers:{
            addCardDataFunction:(s,a)=>{
                const newItem = a.payload;
                const existingItem = s.addCardData.find((item)=>item.id === newItem.id);
                if(existingItem){
                    // existingItem.totalPrice += existingItem.price
                    // s.totalPrice += existingItem.price
                    // existingItem.totalQuantity++
                    return;
                }else{
                    s.addCardData.push({
                        id:newItem.id,
                        title:newItem.title,
                        price:newItem.price,
                        totalPrice:newItem.price,
                        quantity:1,
                        image:newItem.image,
                    })
                }

                s.totalPrice +=newItem.price
                s.totalQuantity++

            },

            deletecardData:(s,a)=>{
                const id = a.payload;
               const existingItem = s.addCardData.find((item)=> item.id === id);
               if(existingItem){
                   s.totalPrice -= existingItem.totalPrice;
                   existingItem.totalPrice -= existingItem.price
                   existingItem.quantity--
                   s.addCardData = s.addCardData.filter((i)=>i.id !== id )
               }
            },
            decreaseCardQuantity:(s,a)=>{
                const id = a.payload;
                const findIndex = s.addCardData.find((i)=>i.id === id);
                if(findIndex.quantity === 1){
                    return;
                }else{
                    findIndex.quantity--;
                    findIndex.totalPrice -= findIndex.price;
                    s.totalPrice -= findIndex.price;
                }
            },

            increaseCardQuantity:(s,a)=>{
                const id = a.payload;
                const findIndex = s.addCardData.find((i)=>i.id === id);

                if(findIndex){
                    findIndex.quantity++;
                    findIndex.totalPrice += findIndex.price;
                    s.totalPrice += findIndex.price;
                }
            },

            searchProductFunction:(s,a)=>{
                const query = a.payload;
                s.searchData = s.productData.filter((item)=>item.title.toLowerCase().includes(query.toLowerCase()))
            }
    },

    extraReducers:(b)=>{
        b.addCase(productThunk.pending,(s)=>{
            s.loading = true
        });
        b.addCase(productThunk.fulfilled,(s,a)=>{
            s.loading = false;
            s.productData = a.payload;
        });
        b.addCase(productThunk.rejected,(s)=>{
            s.loading = true;
        });
    },
});
export const {addCardDataFunction,deletecardData,decreaseCardQuantity,increaseCardQuantity,searchProductFunction} = productSlice.actions;
export default productSlice.reducer