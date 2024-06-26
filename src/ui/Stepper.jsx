function Stepper({ currentStep, numberOfStep }) {
  // const activeColor = (index) => currentStep >= index ? 'bg-blue-500' : 'bg-gray-300'
  //

  return (
    <ul className="flex gap-1 items-center">
      <li className="text-lg font-medium text-gray-900">{numberOfStep - 1}</li>
      <li className="text-base font-normal text-gray-900">/</li>
      <li className="text-base font-normal text-gray-600">{currentStep}</li>
    </ul>
  );
}

export default Stepper;
