import React from "react"
import axios from "axios"

/**
 *
 * @param {number} price
 * @returns
 */
export const numberFormatter = (
  Number,
  currencyCode = 'INR',
  currencyCountry = 'en-IN'
) => {
  if (Number === '') {
    return ''
  }
  const formatter = new Intl.NumberFormat(currencyCountry, {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: 0, 
  })

  const formattedPrice = formatter.format(Number)
  return formattedPrice
}


/**
 *
 * @param {string} apiType
 * @param {string} apiPath
 * @param {object} data
 *
 * @returns
 */
export const makeApiRequest = async (apiType, apiPath, data) => {
  try {
    let response
    switch (apiType.toLowerCase()) {
      case 'get':
        response = await axios.get(apiPath, data)
        break
      case 'post':
        response = await axios.post(apiPath, data)
        break
      case 'put':
        response = await axios.put(apiPath, data)
        break
      case 'delete':
        response = await axios.delete(apiPath)
        break
      default:
        throw console.log(`Unsupported API type: ${apiType}`)
    }
    return response
  } catch (error) {
    console.log(error)
  }
}
export const toSlug = (str) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

export const validateSlug = (slug) => {
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return slugRegex.test(slug);
};

// export const formatMongoDate = (createdAt) => {
//   const date = new Date(createdAt);
//   const options = { year: 'numeric', month: 'short', day: 'numeric' };
//   return date.toLocaleDateString('en-US', options);
// }
export const formatDate = (dateInput) => {
  let date;
  
  if (typeof dateInput === 'string' && dateInput.includes('/')) {
    const [day, month, year] = dateInput.split('/');
    date = new Date(`${year}-${month}-${day}`);
  } else {
    date = new Date(dateInput);
  }

  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

export const CustomTabLabel = ({ count }) => (
    <div>
  {count}
    </div>
);
export const formatPriceRange = (num1, num2) => {
  const [minPrice, maxPrice] = num1 < num2 ? [num1, num2] : [num2, num1];

  const getFormattedValue = (num) => {
    if (num >= 10000000) {
      return { value: (num / 10000000).toFixed(1), suffix: "Cr" };
    } else if (num >= 100000) {
      return { value: (num / 100000).toFixed(1), suffix: "L" };
    } else if (num >= 1000) {
      return { value: (num / 1000).toFixed(1), suffix: "K" };
    }
    return { value: num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), suffix: "" };
  };

  const minFormatted = getFormattedValue(minPrice);
  const maxFormatted = getFormattedValue(maxPrice);


  return `₹${minFormatted.value} ${minFormatted.suffix} - ₹${maxFormatted.value} ${maxFormatted.suffix}`;
};
export const formatDateToHTMLType=(mongoDate) => {
  const date = new Date(mongoDate); // Convert to JavaScript Date object
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}




