// IMPORTANT NOTE
// These are the categories displayed on the homepage hero section, NOT all categories
// There may be more categories, which will all be listed on the All Categories page

export const categories = [

  { category: 'Business', color: '#fdffba' },
 
]


export const getColor = (whatCategory) => {
  const index = categories.find(element => element.category.toUpperCase() === whatCategory.toUpperCase())

  //if undefined, return default
  return (index ? index.color : '#c9c4ff');
}
