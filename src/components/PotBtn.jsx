import React from 'react'
import Modal from 'react-modal'

const customStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: 999,

      },
    
};
Modal.setAppElement("#root");

const PotBtn = () => {

const [modalIsOpen, setIsOpen] = React.useState(false);
        
        function openModal() {
          setIsOpen(true);
        }
      
        function closeModal() {
          setIsOpen(false);
        }
  return (
    <div>
      
      <button onClick={openModal} className='text-sm p-4 rounded-md text-white font-bold bg-black'>+Add New Pot</button>
            
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={'absolute top-[50%] left-[50%]  lg:h-[72vh] lg:w-[38vw] right-auto bottom-auto mr-[-50%] transform -translate-x-[50%] -translate-y-[50%] px-4 py-6 rounded-md bg-white sm:w-[86vw] sm:h-[70vh] md:w-[59vw] '}>
         
            <div className='px-2 pb-0 flex flex-col gap-2 '>
                <h1 className='text-black text-lg font-bold '>Add New Pot</h1>
                <p className='mt-2 text-gray-500 text-sm mb-2'>Choose a category to set a spending budget. These categories can help you monitor spending.</p>
                
                <form action="" className='flex flex-col gap-3'>                               
                    <div className='flex flex-col gap-1 '>
                        <label htmlFor=" " className='text-grey-500 text-sm'>Pot Name</label>
                        <input type="text" placeholder='e.g Rainy Days' className='w-[100%] border px-4 py-2 rounded-lg border-gray-500 ' />
                    </div>
                    
                    <div className='flex flex-col gap-1 mt-3 '>
                        <label htmlFor="" className='text-grey-500 text-sm'>Target Amount</label>
                        <input type="number" placeholder='e.g $1000' className='w-[100%] border px-4 py-2 rounded-lg border-gray-500 ' />
                    </div>
            
                                        <div className='flex flex-col gap-1 '>
                                      <label htmlFor="" className='text-grey-500 text-sm'>Theme</label>
                                      <select className='border border-grey-200 px-4 py-3 text-grey-500 rounded-md text-md '>
                                          <option value="Green">Red</option>
                                          <option value="Green">Green</option>
                                          <option value="Blue">Blue</option>
                                          <option value="Grey">Grey</option>
                                          <option value="Orange">Orange</option>
                                          <option value="Yellow">Yellow</option>
                                          <option value="Brown">Brown</option>
                                          <option value="Cyan">Cyan</option>
                                          <option value="Purple">Purple</option>
                                          <option value="Pink">Pink</option>
                                          <option value="Army">Army</option>
                                          <option value="Magenta">Magenta</option>
                                          <option value="Turquoise">Turquoise</option>
                                      </select>
                                  </div>
            
                                        <button className='text-sm font-bold  text-white px-3 py-4 rounded-lg bg-gray-950 hover:bg-grey-500 '>Submit</button>
                                </form>
                        </div>
                    </Modal>

    </div>
  )
}

export default PotBtn
