import React from 'react'
import img from '../../assets/images/pawa.svg'

const Meter: React.FC = ()=>{
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
                <input type="text" placeholder='Enter Your Meter Number' required/>
               
                <label htmlFor="Location">Location</label>
                <select name="location" id="" required>
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
                </select>
                <label htmlFor="provider">Select Your Service Provider/estate</label>
                <select name="provider" id="" required>
                    <option value="">Please Select Your provider/estate</option>
                    <option value=""> AEDC</option>
                    <option value=""> NEDC</option>
                </select>

                <label htmlFor="meterType">Account/Meter Type</label>
                <select name="meterType" id="" required >
                    <option value="">Please Select Your Meter Type</option>
                    <option value=""> Prepaid</option>
                    <option value=""> Postpaid</option>
                </select>
                <button type='submit'>Add Meter</button>
            </form>
        </div>
    )
}

export default Meter