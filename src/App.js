import React,{useState, useEffect} from 'react';
import {Routers} from './router'
import { useHistory } from "react-router-dom"
import productApi from './api/productApi'
import categoryApi from './api/categoriesApi'
import './assets/css/bootstrap.min.css'

function App() {
  const [products, setProduct] = useState([]); // list products
  const [category, setCategory] = useState([]); // list category

  // Danh sách sản phẩm
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data} = await productApi.getAll();
        setProduct(data);
      } catch (error) {
        console.log(error)
      }
    }
    getProducts();
  }, []);

  //add Product
  const productAdd = async (product)=>{
    console.log(product)
    await productApi.create(product);
    const newProduct = {
      id: products.length + 1,
      ...product
    }
    setProduct([
      ...products,
      newProduct
    ])
    alert('Thêm thành công !');
    window.history.back();
  }

  //update Product
  const productUpdate = async (request)=>{
    try {
      console.log(request)
      await productApi.update(request.id, request);
      const newProducts = products.map(product => (
        product.id == request.id ? request : product 
      ));
      setProduct(newProducts);
      alert('Sửa thành công !');
      window.history.back();
    } catch (error) {
      console.log(error)
      alert("Errors");
    }
  }

  //delete Product
  const onHandleRemove = async (id) => {
    await productApi.remove(id);
    const newproducts = products.filter(product => product.id !== id);
    setProduct(newproducts);
    alert('Xóa thành công !');
  }

  // Danh sách Danh mục
  useEffect(() => {
    const getCate = async () => {
      try {
        const { data } = await categoryApi.getAll();
        setCategory(data);
      } catch (error) {
        console.log(error)
      }
    }
    getCate();
  }, []);

  const newCates = (data) =>{
    setCategory(data);
  }

  //render layout
  return (
    <div>
      <Routers 
        products={products} 
        categories={category} 
        newCates={newCates}
        productAdd={productAdd} 
        remove={onHandleRemove} 
        update={productUpdate}
      />
    </div>
  );
}

export default App;
