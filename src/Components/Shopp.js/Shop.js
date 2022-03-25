import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Modal from 'react-modal';
import "./Shop.css";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');
  

const Shop = () => {
    const [products , setProducts] = useState([]);
    const [card , setCard] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    console.log(card); 

    function openModal() {
        setIsOpen(true);
      }

      function closeModal() {
        setIsOpen(false);
      }

    const handleAddToCard = (product)=>{
        const newCard = [...card , product];
        setCard( newCard);
    }

    useEffect(()=>{
        fetch("data.json")
        .then(res=> res.json()).then(data => setProducts(data));
    },[])
    return (
        
        <div className='container'>
            {/* <button onClick={openModal}>Open Modal</button> */}
            {
                products.map((product)=>(<Card
                
                product={product}
                key={product.id}
                handleAddToCard={handleAddToCard}
                openModal={openModal}
                >
                    
                </Card>))  
            }
            
             <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <button onClick={closeModal}>Close</button>
          <h1>sagor</h1>
      </Modal>
        </div>
    );
};

export default Shop;