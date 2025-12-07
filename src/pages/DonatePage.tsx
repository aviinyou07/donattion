import React from 'react';
import Header from '@/components/Header';         // The responsive header component
import DonationForm from '@/components/DonationForm'; // The donation form component
import Footer from '@/components/Footer';         // The footer component from step 1

const DonatePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      
      {/* 1. Sticky Header */}
      <Header />

      {/* 2. Main Content Area */}
      {/* We use flex-grow to ensure this section takes up available space */}
      <main className="flex-grow flex flex-col items-center justify-center w-full">
        
        {/* Note: Since DonationForm has 'min-h-screen' in its own definition, 
           it will center itself. If you want to reduce the vertical spacing 
           caused by the header + min-h-screen, you can adjust the DonationForm's 
           outer className or wrap it here.
        */}
        <div className="">
            <DonationForm />
        </div>
        
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
};

export default DonatePage;