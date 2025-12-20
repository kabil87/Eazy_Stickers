import PageTitle from "./PageTitle"

const About = () => {


  return (
    
    <div className="ml-10 w-60 sm:ml-60 mt-6 sm:w-200">


     <div className="text-center sm: mb-3 sm:text-center">
      <PageTitle title="About" />
     </div>

     <p className="mb-6 dark:text-light text-sm sm:mb-5">eazy sticker store is an initiative by Designs by Kapil, dedicated to offering you the most sought-after stickers and posters!</p>

     <PageTitle title="Why Choose Us?" />
     <h3 className="dark:text-lighter sm: mt-2 mb-1" >Premium quality</h3>
     <p className="dark:text-light text-sm">We strive to provide every customer with the utmost satisfaction by delivering high-quality vinyl stickers crafted with care and  precision.</p>
     
     <h3 className="dark:text-lighter sm: mt-4 mb-1">Product Innovation</h3>
     <p className="dark:text-light text-sm">Our vinyl stickers feature a premium matte or glossy finish lamination and are made with advanced adhesive technology. Designed to withstand all weather conditions and resist scratches, our
        stickers are gentle enough to preserve the surface of your beloved  gadgets.</p>

    <h3 className="mt-4 dark:text-lighter sm:mt-4 mb-1">Excellent service</h3> 
    <p className="dark:text-light text-sm"> Customer satisfaction is our top priority, and we’re committed to delivering an exceptional shopping experience.</p>   

    <h3 className="mt-4 dark:text-lighter sm:mt-4 mb-2">Designs you will love</h3>
    <p className="dark:text-light text-sm">With over 1,000 designs, our collection ranges from relatable and seriously funny to delightfully quirky. And we’re just getting started—stay tuned for more exciting products and designs!</p>

    </div>  

  )
}

export default About
