import React from 'react'

const FeaturedCollection = () => {
  return (
    <section>
        <h4>Coleções em destaque</h4>
        <div id="containerPromocoes" className="flex ">
            <div className="divPromocoes relative">
                <div className="escritaPromocoes z-1 absolute">
                    <p className="off">30% OFF</p>
                    <h3>Novo drop Supreme</h3>
                    <a href="/Products"><button className="btnBuy">Comprar</button></a>
                </div>
                <img 
                src="src\Images\products\shirtSW.png" 
                alt="Blusa Supreme Star Wars" 
                className="absolute bottom-0 right-0 z-0"
                />
            </div>
            <div className="divPromocoes relative">
                <div className="escritaPromocoes absolute z-1">
                    <p className="off">30% OFF</p>
                    <h3>Coleção Adidas</h3>
                    <a href="/Products"><button className="btnBuy">Comprar</button></a>
                    

                </div>
                <img 
                src="src\Images\products\ddd-1.png" 
                alt="Tenis Marca X" 
                className="absolute bottom-0 right-0 z-0 opacity-100"
                />
            </div>
            <div className="divPromocoes relative">
                <div className="escritaPromocoes">
                    <p className="off">30% OFF</p>
                    <h3>Novo <br/> Beats Bass</h3>
                    <a href="/Products"><button className="btnBuy">Comprar</button></a>
                    
                </div>
                <img 
                src="src\Images\products\headphone.png" 
                alt="Headphone" 
                className="absolute bottom-0 right-0"
                />
            </div>
        </div>
    </section>
  )
}

export default FeaturedCollection
