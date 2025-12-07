import React, { useState } from 'react';
import { 
  ChevronDown, 
  Info, 
  ShieldCheck, 
  Heart, 
  ScanLine, 
  Landmark, 
  Globe, 
  Upload, 
  CheckCircle,
  X
} from 'lucide-react';
import Qrcode from "@/assets/Qrcode.jpeg";

const DonationForm = () => {
  // Form State
  const [donationAmount, setDonationAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState(15);
  const [paymentRegion, setPaymentRegion] = useState('uk'); // 'uk' or 'international'
  const [proofFile, setProofFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Helper to calculate totals
  const amountNum = parseFloat(donationAmount) || 0;
  const tipAmount = (amountNum * (tipPercentage / 100));
  const totalDue = amountNum + tipAmount;

  // Handle File Upload
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProofFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    // Logic to submit data to backend would go here
  };

  // --------------------------------------------------------------------------
  // SUCCESS VIEW
  // --------------------------------------------------------------------------
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-5 px-4 font-sans">
        <div className="bg-white w-full max-w-[480px] rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            We have received your payment proof. Your contribution will help bring Vijay home.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-6">
            <p className="text-sm text-gray-500 uppercase font-semibold">Total Donation</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">₹{totalDue.toFixed(2)}</p>
          </div>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-green-700 font-bold hover:underline text-sm"
          >
            Make another donation
          </button>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // FORM VIEW
  // --------------------------------------------------------------------------
  return (
    <div className=" bg-white ">
      <div className="w-full p-6 relative">
        
        {/* Header */}
        <div className="flex gap-4 mb-6">
          <div className="relative w-14 h-14 shrink-0">
            {/* Progress Circle Simulation */}
            <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
              <path className="text-gray-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
              <path className="text-green-500" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-gray-600">74%</div>
          </div>
          <div>
            <h1 className="text-xl font-bold leading-tight text-gray-900">
              Repatriation of Vijay's Mortal Remains to India
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-bold text-gray-800">Still £3,416 to go.</span> Help us build momentum.
            </p>
          </div>
        </div>

        {/* Toggle Buttons */}
        <div className="flex bg-gray-100 p-1 rounded-full mb-6">
          <button className="flex-1 py-2 rounded-full bg-[#1e5a40] text-white font-semibold text-sm shadow-sm transition-all">
            Give once
          </button>
          <button className="flex-1 py-2 rounded-full text-gray-600 font-semibold text-sm flex items-center justify-center gap-1 hover:bg-gray-200 transition-all">
            Monthly <Heart className="w-3 h-3 text-green-600 fill-current" />
          </button>
        </div>

         

        {/* Tip Section */}
        <div className="mb-6 pb-6 border-b border-gray-100">
          <h3 className="font-bold text-sm text-gray-800 mb-1">Tip GoFundMe services</h3>
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            GoFundMe has a 0% platform fee for organizers.
          </p>
          <div className="flex items-center gap-4 mb-2">
             <input 
                type="range" 
                min="0" 
                max="30" 
                value={tipPercentage}
                onChange={(e) => setTipPercentage(parseInt(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-700"
             />
             <div className="border border-gray-300 rounded px-2 py-1 text-xs font-bold text-gray-700 min-w-[3rem] text-center">
                {tipPercentage}%
             </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BANK TRANSFER SECTION                           */}
        {/* ========================================================================= */}
        <div className="mb-8">
          <h3 className="font-bold text-sm text-gray-800 mb-3 flex items-center gap-2">
             <Landmark className="w-4 h-4 text-green-700" />
             Bank Transfer Details
          </h3>
          
          {/* Region Tabs */}
          <div className="flex border-b border-gray-200 mb-4">
            <button 
              onClick={() => setPaymentRegion('uk')}
              className={`pb-2 px-4 text-sm font-medium transition-colors ${paymentRegion === 'uk' ? 'border-b-2 border-black text-black' : 'text-gray-500 hover:text-gray-700'}`}
            >
              UK Transfer 🇬🇧
            </button>
            <button 
              onClick={() => setPaymentRegion('international')}
              className={`pb-2 px-4 text-sm font-medium transition-colors ${paymentRegion === 'international' ? 'border-b-2 border-black text-black' : 'text-gray-500 hover:text-gray-700'}`}
            >
              International 🌍
            </button>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            {paymentRegion === 'uk' ? (
              // ---------------- UK DETAILS (UPDATED) ----------------
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-xs text-gray-500">Account Name</span>
                  <span className="text-sm font-semibold text-gray-800">Garvit</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-xs text-gray-500">Sort Code</span>
                  <span className="text-sm font-mono font-bold text-gray-800 tracking-wider">40-12-63</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Account No</span>
                  <span className="text-sm font-mono font-bold text-gray-800 tracking-wider">01455478</span>
                </div>
              </div>
            ) : (
              // ---------------- INTERNATIONAL DETAILS ----------------
              <div className="space-y-4">
                 <div className="text-center mb-4">
                    {/* Placeholder QR Code for International */}
                    <div className="bg-white p-2 inline-block rounded-lg shadow-sm border border-gray-200 mb-2">
                      <img 
                        src={Qrcode} 
                        alt="International Payment QR" 
                        className="w-28 h-28 object-contain"
                      />
                    </div>
                    <p className="text-xs text-gray-500">Scan to pay via Revolut / Wise / PayPal</p>
                 </div>

                  
              </div>
            )}
            
           
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PROOF OF PAYMENT SECTION                        */}
        {/* ========================================================================= */}
        <div className="mb-8">
           <h3 className="font-bold text-sm text-gray-800 mb-3 flex items-center gap-2">
             <Upload className="w-4 h-4 text-green-700" />
             Upload Proof of Payment
           </h3>
           <div className="border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 p-6 text-center hover:bg-gray-100 transition-colors relative">
              <input 
                type="file" 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
                accept="image/*,.pdf"
              />
              {proofFile ? (
                 <div className="flex items-center justify-center gap-2 text-green-700 font-medium">
                    <CheckCircle className="w-5 h-5" />
                    <span className="truncate max-w-[200px]">{proofFile.name}</span>
                    <button onClick={(e) => {
                       e.preventDefault();
                       setProofFile(null); 
                    }} className="p-1 hover:bg-green-100 rounded-full"><X className="w-4 h-4"/></button>
                 </div>
              ) : (
                <>
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 font-medium">Click to upload screenshot</p>
                  <p className="text-xs text-gray-400 mt-1">JPG, PNG or PDF</p>
                </>
              )}
           </div>
        </div>

        {/* Summary */}
        <div className="border-t border-gray-200 pt-4 mb-6">
            <h3 className="font-bold text-sm text-gray-800 mb-3">Your donation</h3>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Your donation</span>
                <span>₹{amountNum.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>GoFundMe tip</span>
                <span>₹{tipAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-base font-bold text-gray-800 mb-4">
                <span>Total due</span>
                <span>₹{totalDue.toFixed(2)}</span>
            </div>
        </div>

        {/* Submit Button */}
        <button 
          onClick={handleSubmit}
          className={`w-full py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-all mb-4 border bg-[#274a34] hover:bg-[#0b4230] text-[#cbf78d]
           `}
        >
            <ShieldCheck className="w-5 h-5" />
            I have made the payment
        </button>

        {/* Footer Legal */}
        <div className="text-[10px] text-gray-500 leading-snug mb-6 text-center">
            By clicking 'Pay', you agree to our Terms.
        </div>

        {/* Guarantee Badge */}
        <div className="flex gap-3 items-start border-t border-gray-100 pt-4">
            <ShieldCheck className="w-8 h-8 text-gray-600 shrink-0" />
            <div>
                <h4 className="font-bold text-xs text-gray-800">GoFundMe protects your donation</h4>
                <p className="text-[10px] text-gray-500 leading-tight mt-1">
                    We guarantee you a full refund for up to a year in the rare case that fraud occurs.
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default DonationForm;