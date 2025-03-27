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
                <Select name="location" id="" required>
                <option value="">Select a State</option>
                <option value="abia">Abia</option>
                <option value="adamawa">Adamawa</option>
                <option value="akwa-ibom">Akwa Ibom</option>
                <option value="anambra">Anambra</option>
                <option value="bauchi">Bauchi</option>
                <option value="bayelsa">Bayelsa</option>
                <option value="benue">Benue</option>
                <option value="borno">Borno</option>
                <option value="cross-river">Cross River</option>
                <option value="delta">Delta</option>
                <option value="ebonyi">Ebonyi</option>
                <option value="edo">Edo</option>
                <option value="ekiti">Ekiti</option>
                <option value="enugu">Enugu</option>
                <option value="gombe">Gombe</option>
                <option value="imo">Imo</option>
                <option value="jigawa">Jigawa</option>
                <option value="kaduna">Kaduna</option>
                <option value="kano">Kano</option>
                <option value="katsina">Katsina</option>
                <option value="kebbi">Kebbi</option>
                <option value="kogi">Kogi</option>
                <option value="kwara">Kwara</option>
                <option value="lagos">Lagos</option>
                <option value="nasarawa">Nasarawa</option>
                <option value="niger">Niger</option>
                <option value="ogun">Ogun</option>
                <option value="ondo">Ondo</option>
                <option value="osun">Osun</option>
                <option value="oyo">Oyo</option>
                <option value="plateau">Plateau</option>
                <option value="rivers">Rivers</option>
                <option value="sokoto">Sokoto</option>
                <option value="taraba">Taraba</option>
                <option value="yobe">Yobe</option>
                <option value="zamfara">Zamfara</option>
                <option value="fct">Federal Capital Territory (Abuja)</option>
                </Select>
                <label htmlFor="provider">Select Your Service Provider/estate</label>
                <Select name="provider" id="" required>
                    <option value="">Please Select Your provider/estate</option>
                    <option value="AEDC"> Abuja Electricity Distribution Company (AEDC)</option>
                    <option value="BEDC">Benin Electricity Distribution Company (BEDC)</option>
                    <option value="EKEDC">Eko Electricity Distribution Company (EKEDC)</option>
                    <option value="EEDC">Enugu Electricity Distribution Company (EEDC)</option>
                    <option value="IBEDC">Ibadan Electricity Distribution Company (IBEDC)</option>
                    <option value="IE">Ikeja Electric (IE)</option>
                    <option value="JEDC">Jos Electricity Distribution Company (JEDC)</option>
                    <option value="KEDC">Kaduna Electricity Distribution Company (KEDC)</option>
                    <option value="KEDCO">Kano Electricity Distribution Company (KEDCO)</option>
                    <option value="PHEDC">Port Harcourt Electricity Distribution Company (PHEDC)</option>
                    <option value="YEDC">Yola Electricity Distribution Company (YEDC)</option>
                </Select>

                <label htmlFor="meterType">Account/Meter Type</label>
                <Select name="meterType"
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