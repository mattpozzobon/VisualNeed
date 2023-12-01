import React, { useState } from 'react';
import './TopBar.scss';
import { Items } from '../Database/Inventory';
import { useInventory } from '../Database/Inventory';

const TopBar = () => {
  const { slots } = useInventory();
  const [dropdownOneValue, setDropdownOneValue] = useState('');
  const [dropdownTwoValue, setDropdownTwoValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayItem, setDisplayItem] = useState("");
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDropdownOneChange = (event) => {
    openModal();
    setDisplayItem(event.target.value)
    setDropdownOneValue(event.target.value);
  };

  const handleDropdownTwoChange = (event) => {
    setDropdownTwoValue(event.target.value);
  };

  const createUniqueItemList = () => {
    const uniqueTypes = {};
    const uniqueList = [];
    
    slots.forEach(item => {
      const theType = item.type.includes("ring") ? "ring" : item.type;

      if (!uniqueTypes[theType] && !theType.includes("hand") && !theType.includes("backpack")) {
        uniqueTypes[theType] = true;
        uniqueList.push(item.type);
      }
    });
    return uniqueList;
  }

  const renderList = () => {
    const list = createUniqueItemList();
    return list.map((option, index) => (
      <option key={index} value={option}>{option}</option>
    ));
  }

  return (
    <>
      <div className="top-bar">
        <select value={dropdownOneValue} onChange={handleDropdownOneChange}>
        <option value="" disabled>Select an Item</option> 
          {renderList()}
        </select>

        <select value={dropdownTwoValue} onChange={handleDropdownTwoChange}>
          <option value="">Select Option</option>
        </select>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} onDisplayItem={displayItem}>
      </Modal>
    </>
  );
};

export default TopBar;

const Modal = ({ isOpen, onClose, onDisplayItem}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { addItem } = useInventory();

  if (!isOpen) return null;

  const createItem= () => {
    addItem(selectedItem)
  }

  const renderItemList = (itemType) => {
    const filteredItems = Items?.filter(item => item.type === itemType);
  
    return (
      <>
        {filteredItems.map((item, index) => (
          <img src={item.imageUrl} key={index} onClick={() => setSelectedItem(item)} className={item === selectedItem ? "selected" : ""}/>
        ))}
      </>
    );
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="header">
          <img className="image" src={`Images/InventorySlots/${onDisplayItem}.png`}/>
          <p className="title">{onDisplayItem}s</p>
        </div>
        <div className="items">
          {renderItemList(onDisplayItem)}
        </div>
        <button className="create-button" onClick={() => createItem()}>Create Item</button>
      </div>
    </div>
  );
};