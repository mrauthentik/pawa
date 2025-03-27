import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../../assets/images/pawa.svg'

import Select, {selectClasses } from '@mui/joy/select'
import Option from '@mui/joy/option'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'

const Meter: React.FC = ()=>{
    const navigate = useNavigate()
    const handleSubmit = ()=>{
        console.log('submitted')
        navigate('/meter-success')

    }
    return(
        <div className='meter-container'>
            <div className="logo">
                <img src={img} alt="" />
            </div>
            <div className="header">
                <p>Add Meter</p>
            </div>
            <div className="mini-text">
                <p>Add your meter to manage it!</p>
            </div>

            <form>
                <label htmlFor="meternumber">Meter Number/Account Number</label>
                <input type="number" placeholder='Enter Your Meter Number' required/>
               
                <label htmlFor="Location">Location</label>
                <Select name="location" 
                        className='select'
                        required
                        placeholder="Please select Your Location"
                        indicator={<KeyboardArrowDown/>}
                        sx={{
                            width:240,
                            [`& .${selectClasses.indicator}`]:{
                             transition: `0.2s`,
                             [`& .${selectClasses.expanded}`]:{
                                transform: `rotate(-180deg)`,
                             },
                            },
                         }}
                        >
                <Option value="abia">Abia</Option>
                <Option value="adamawa">Adamawa</Option>
                <Option value="akwa-ibom">Akwa Ibom</Option>
                <Option value="anambra">Anambra</Option>
                <Option value="bauchi">Bauchi</Option>
                <Option value="bayelsa">Bayelsa</Option>
                <Option value="benue">Benue</Option>
                <Option value="borno">Borno</Option>
                <Option value="cross-river">Cross River</Option>
                <Option value="delta">Delta</Option>
                <Option value="ebonyi">Ebonyi</Option>
                <Option value="edo">Edo</Option>
                <Option value="ekiti">Ekiti</Option>
                <Option value="enugu">Enugu</Option>
                <Option value="gombe">Gombe</Option>
                <Option value="imo">Imo</Option>
                <Option value="jigawa">Jigawa</Option>
                <Option value="kaduna">Kaduna</Option>
                <Option value="kano">Kano</Option>
                <Option value="katsina">Katsina</Option>
                <Option value="kebbi">Kebbi</Option>
                <Option value="kogi">Kogi</Option>
                <Option value="kwara">Kwara</Option>
                <Option value="lagos">Lagos</Option>
                <Option value="nasarawa">Nasarawa</Option>
                <Option value="niger">Niger</Option>
                <Option value="ogun">Ogun</Option>
                <Option value="ondo">Ondo</Option>
                <Option value="osun">Osun</Option>
                <Option value="oyo">Oyo</Option>
                <Option value="plateau">Plateau</Option>
                <Option value="rivers">Rivers</Option>
                <Option value="sokoto">Sokoto</Option>
                <Option value="taraba">Taraba</Option>
                <Option value="yobe">Yobe</Option>
                <Option value="zamfara">Zamfara</Option>
                <Option value="fct">Federal Capital Territory (Abuja)</Option>
                </Select>
                <label htmlFor="provider">Select Your Service Provider/estate</label>
                <Select name="provider" 
                        className='select'
                        required
                        placeholder="Please Select Your provider/estate"
                        indicator={<KeyboardArrowDown/>}
                        sx={{
                            width:240,
                            [`& .${selectClasses.indicator}`]:{
                             transition: `0.2s`,
                             [`& .${selectClasses.expanded}`]:{
                                transform: `rotate(-180deg)`,
                             },
                            },
                         }}
                 
                >
                    <Option value="">Please Select Your provider/estate</Option>
                    <Option value="AEDC"> Abuja Electricity Distribution Company (AEDC)</Option>
                    <Option value="BEDC">Benin Electricity Distribution Company (BEDC)</Option>
                    <Option value="EKEDC">Eko Electricity Distribution Company (EKEDC)</Option>
                    <Option value="EEDC">Enugu Electricity Distribution Company (EEDC)</Option>
                    <Option value="IBEDC">Ibadan Electricity Distribution Company (IBEDC)</Option>
                    <Option value="IE">Ikeja Electric (IE)</Option>
                    <Option value="JEDC">Jos Electricity Distribution Company (JEDC)</Option>
                    <Option value="KEDC">Kaduna Electricity Distribution Company (KEDC)</Option>
                    <Option value="KEDCO">Kano Electricity Distribution Company (KEDCO)</Option>
                    <Option value="PHEDC">Port Harcourt Electricity Distribution Company (PHEDC)</Option>
                    <Option value="YEDC">Yola Electricity Distribution Company (YEDC)</Option>
                </Select>

                <label htmlFor="meterType">Account/Meter Type</label>
                <Select name="meterType"
                         className='select'
                         required 
                         placeholder='Please Select Your Meter Type'
                         indicator={<KeyboardArrowDown/>}
                         sx={{
                            width:240,
                            [`& .${selectClasses.indicator}`]:{
                             transition: `0.2s`,
                             [`& .${selectClasses.expanded}`]:{
                                transform: `rotate(-180deg)`,
                             },
                            },
                         }}
                         >
                    
                    <Option value=""> Prepaid</Option>
                    <Option value=""> Postpaid</Option>
                </Select>
                <button type='submit' onClick={handleSubmit}>Add Meter</button>
            </form>
        </div>
    )
}

export default Meter