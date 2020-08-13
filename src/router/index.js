import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Admin
import {Admin} from '../pages/layouts/Admin'
import { Dashboard } from '../pages/views/admin/Dashboard'
import { Product_list } from '../pages/views/admin/products'
import { Product_add } from '../pages/views/admin/products/add'
import { Product_detail } from '../pages/views/admin/products/detail'
import { Category_list } from '../pages/views/admin/categories'
import { Category_create } from '../pages/views/admin/categories/create'
import { Category_update } from '../pages/views/admin/categories/update'
//Home
import {Main} from '../pages/layouts/Main'
import {Home} from '../pages/views/main'
import { Detail } from '../pages/views/main/Detail'
import { Products } from '../pages/views/main/Products'
import { Contact } from '../pages/views/main/Contact'
export const Routers = ({products, productAdd, remove, update, categories, newCates}) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/admin/:path?">
                    <Admin>
                        <Route exact path="/admin/">
                            <Dashboard/>
                        </Route>
                        <Route exact path="/admin/tables.html">
                            <Product_list products={products} remove={remove}/>
                        </Route>
                        <Route exact path="/admin/products-update-:id">
                            <Product_detail products={products} categories={categories} onUpdate={update}/>
                        </Route>
                        <Route exact path="/admin/products-create-add">
                            <Product_add onAdd={productAdd} categories={categories}/>
                        </Route>
                        <Route exact path="/admin/category">
                            <Category_list categories={categories} newCates={newCates} />
                        </Route>
                        <Route exact path="/admin/category-add">
                            <Category_create categories={categories} newCates={newCates} />
                        </Route>
                        <Route exact path="/admin/category-update-:id?">
                            <Category_update categories={categories} newCates={newCates} />
                        </Route>
                    </Admin>
                </Route>
                <Route exact path="/:path?">
                    <Main categories={categories}>
                        <Route exact path="/">
                            <Home products={products}/>
                        </Route>
                        <Route exact path="/category-:id">
                            <Products products={products}/>
                        </Route>
                        <Route exact path="/detail-:id">
                            <Detail products={products}/>
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                    </Main>
                </Route>
            </Switch>
        </Router>
    )
}
