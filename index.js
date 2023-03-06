import {newArrival} from `./data.js`

const container = document.getElementById("container-wrapper")
let basket = []
function generateContainer() {
    let containerHtml = ``
    
    newArrival.forEach(function(shop){
  
    containerHtml += `
                <div class="item" id="item-id-${shop.id}">
                    <img class="item-image" src=${shop.img}>
                    <div class="details">
                        <h3 class="item-name">${shop.name}</h3>
                        <div class="price-wrapper">
                            <p class="item-price">$${shop.price}</p>
                            <div class="item-buttons">
                                <i class="fa-solid fa-minus" data-decrement="${shop.id}"></i>
                                <div class="quantity">${shop.quantity}</div>
                                <i class="fa-solid fa-plus" data-increment="${shop.id}"></i>
                            </div>
                        </div>
                    </div>
                </div>           
    ` 
    })
    return containerHtml
}
function render(){
    container.innerHTML = generateContainer()
}
render()

document.addEventListener('click', function(e){
    if (e.target.dataset.increment){
        increment(e.target.dataset.increment)
    }
      else if (e.target.dataset.decrement){
        decrement(e.target.dataset.decrement)
      }
})

function increment(productId){
  const productTargetObj = newArrival.filter(function(product){
      return product.id === productId
  })[0]
  productTargetObj.quantity++
  render()
}

function decrement(productId){
    const productTargetObject = newArrival.filter(function(product){
        return product.id === productId
    })[0]
    if(productTargetObject.quantity === 0){
        return
    } else{
         productTargetObject.quantity--
    }
 render()   
}
