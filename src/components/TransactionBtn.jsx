import React from 'react'
import { useForm } from 'react-hook-form';
import Modal from 'react-modal'
import FormField from './FormField';


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


const TransactionBtn = () => {
    const {register, handleSubmit, formState: {errors}, } = useForm();

    const [modalIsOpen, setIsOpen] = React.useState(false);
    
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }


const [selectedDate, setSelectedDate] = React.useState("");

//makes the date into format like January 3rd 2023 instead of 2023-01-03
const formatDate = (dateString) => {
    if (!dateString) return "";
    
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(date).replace(/\d{1,2}/, (day) => {
        const suffixes = ["st", "nd", "rd"];
        const lastDigit = day % 10;
        const suffix = suffixes[(day - 10) % 10 - 1] || "th";
        return day + suffix;
    });
};

const handleDateChange = (event) => {
    setSelectedDate(formatDate(event.target.value));
};

const onSubmit = async (data) => {
    console.log(data);
}

return (
    <div>
        <button onClick={openModal} className='text-sm p-4 rounded-md text-white font-bold bg-black'>+Add New Transaction</button>

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            className={'absolute top-[50%] left-[50%] lg:h-[84vh]  lg:w-[37vw] right-auto bottom-auto mr-[-50%] transform -translate-x-[50%] -translate-y-[50%] p-4 rounded-md bg-white sm:w-[76vw] sm:h-[86vh] md:w-[59vw] '}
        >
            <div className='px-2 pb-0 flex flex-col gap-2 '>
                <h1 className='text-black text-lg font-bold '>Add New Transaction</h1>
                    <form action="" className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col gap-1 '>
                            <label htmlFor=" " className='text-grey-500 text-sm'>Transaction Name</label>
                            <FormField
                                text="text"
                                placeholder="e.g Urban services Hub"
                                className="w-[100%] border px-4 py-2 rounded-lg border-gray-500 "
                                name="transactionName"
                                error={errors.transactionName}
                                valueAsNumber={false}
                                register={register}
                            />
                            {/* <input type="text" placeholder='e.g Urban services Hub' className='w-[100%] border px-4 py-2 rounded-lg border-gray-500 ' /> */}
                            </div>
                            
                            <div className='flex flex-col gap-1 mt-5 relative '>
                                <label htmlFor="" className='text-grey-500 text-sm'>Transaction Date</label>
                                
                                <div className=' flex gap-2 items-center justify-between cursor-pointer bg-beige-100 px-4 py-2 rounded-lg '>
                                 <input type="date" placeholder='' className='custom-date ml-[90%] px-4 py-2  bg-beige-100' onChange={handleDateChange}/>
                
                                </div>
                                {!selectedDate && <p className='text-grey-500 text-sm absolute top-10 left-4 '>Pick a date</p>}
                                {selectedDate && <p className='text-grey-900 text-sm absolute top-10 left-4 '> {selectedDate}</p>}
                            </div>

                            <div className='flex flex-col gap-1 mt-1'>
                                <label htmlFor="" className='text-grey-500 text-sm'>Category</label>
                                <select className='border border-grey-200 px-4 py-2 text-grey-500 rounded-md text-md '>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Bills">Bills</option>
                                    <option value="Groceries">Groceries</option>
                                    <option value="DiningOut">DiningOut</option>
                                    <option value="Transportation">Transportation</option>
                                    <option value="PersonalCare">PersonalCare</option>
                                    <option value="Education">Education</option>
                                    <option value="Lifestyle">Lifestyle</option>
                                    <option value="Shopping">Shopping</option>
                                    <option value="General">General</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-1 mt-1'>
                                <label htmlFor="" className='text-grey-500 text-sm'>Amount</label>
                                <FormField
                                    text="number"
                                    placeholder="e.g $1000"
                                    className="w-[100%] border px-4 py-2 rounded-lg border-gray-500 "
                                    name="amount"
                                    error={errors.amount}
                                    valueAsNumber={true}
                                    register={register}
                                />
                                {/* <input type="number" placeholder='e.g $1000' className='w-[100%] border px-4 py-2 rounded-lg border-gray-500 ' /> */}
                            </div>

                            <div className='flex gap-4 mt-1 items-center'>
                                <label htmlFor="">Recurring</label>
                                <input type="checkbox" className='w-4 h-4 rounded-sm cursor-pointer appearance-none border-2 border-black bg-white checked:bg-black checked:border-black checked:after:text-white checked:after:block checked:after:text-center checked:after:content-["✔"] checked:after:leading-[1.3] checked:after:text-[12px]' />
                            </div>

                            <button className='text-sm font-bold mt-2 mb-0 text-white px-3 py-4 rounded-lg bg-gray-950 hover:bg-grey-500 '>Submit</button>
                    </form>
            </div>
        </Modal>
    </div>
);
}

export default TransactionBtn
