import {useEffect, useState} from "react";

const useCalculateDiscount = (originalPrice: number, discountedPrice: number) => {
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);

  useEffect(() => {
    if (originalPrice > 0 && discountedPrice >= 0) {
      const discountAmount = originalPrice - discountedPrice;
      const calculatedDiscountPercentage = (discountAmount / originalPrice) * 100;
      setDiscountPercentage(Math.round(calculatedDiscountPercentage));
    } else {
      setDiscountPercentage(0);
    }
  }, [originalPrice, discountedPrice]);

  return discountPercentage;
};

export default useCalculateDiscount;
