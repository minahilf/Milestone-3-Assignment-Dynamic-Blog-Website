interface Blog {
  id: number;
  image: string;
  title: string;
  description: string;
  content: string;
}

export const blog: Blog[] = [
  {
    id: 1,
    image: "/Assets/b1.jpg",
    title: "Seasonal Makeup Trends: Fall Edition",
    description: "Dive into the enchanting world of fall-inspired makeup trends. From warm hues to bold lip colors, discover the latest beauty trends that will elevate your autumn beauty routine.",
    content: `
       <section class="bg-[#F7F7F7] py-12 px-6">
  <div class="text-center">
    <h1 class="text-4xl font-bold text-[#262522]">Embrace the Fall Makeup Trends</h1>
    <p class="mt-4 text-lg text-[#333333] leading-relaxed">
      As the crisp fall air sets in and the leaves begin to change, it s the perfect time to refresh your makeup routine with the latest seasonal trends. Fall brings a rich palette of warm hues, bold lip colors, and fresh textures to experiment with, allowing you to embrace the beauty of autumn.
    </p>
  </div>
</section>

<section class="max-w-7xl mx-auto px-6 py-12">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 ">
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">1. Warm, Earthy Tones</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">
        Fall is all about rich, earthy tones that reflect the changing landscape. Think deep browns, burnt oranges, mustard yellows, and terracotta reds. These colors work beautifully for eyeshadows, blush, and even lips.
      </p>
      <ul class="text-[#333333]">
        <li><strong class="text-[#EE6352]">Eyeshadow:</strong> Warm matte shades like amber, copper, and burnt orange.</li>
        <li><strong class="text-[#EE6352]">Blush:</strong> Peachy or terracotta blush tones.</li>
        <li><strong class="text-[#EE6352]">Lips:</strong> Bold lip colors like brick red, cinnamon, and chocolate brown.</li>
      </ul>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">2. Bold Lip Colors</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">
        Fall is the perfect season to experiment with deeper, more dramatic lip colors. Say goodbye to lighter summer shades and embrace rich, bold hues like plum, deep red, and burgundy.
      </p>
      <ul class="text-[#333333]">
        <li><strong class="text-[#EE6352]">Matte Finish:</strong> A matte lip is timeless and sophisticated for fall.</li>
        <li><strong class="text-[#EE6352]">Glossy Finish:</strong> Add a bit of gloss for a youthful, dewy finish.</li>
      </ul>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">3. Smoky Eyes with a Twist</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">
        The classic smoky eye gets a modern update this fall. Instead of the usual dark greys and blacks, opt for sultry shades like copper, bronze, and deep burgundy.
      </p>
      <ul class="text-[#333333]">
        <li><strong class="text-[#EE6352]">Glitter and Shimmer:</strong> Add sparkle for a festive vibe.</li>
      </ul>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">4. Dewy, Glowing Skin</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">
        Dewy skin is still a major trend this fall, giving you a youthful, fresh complexion. Use hydrating primers, lightweight foundations, and highlighters to enhance your natural skin texture.
      </p>
      <ul class="text-[#333333]">
        <li><strong class="text-[#EE6352]">Highlighter:</strong> Apply a liquid or cream highlighter to accentuate your cheekbones, brow bone, and the bridge of your nose.</li>
        <li><strong class="text-[#EE6352]">Moisturizing Products:</strong> Keep your skin hydrated with moisturizers and setting sprays.</li>
      </ul>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">5. Defined Brows</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">
        Defined brows continue to be a major trend this fall. Strong, sculpted eyebrows frame your face and give structure to your makeup look.
      </p>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">6. Flushed Cheeks</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">
        Soft pinks and rosy tones add a natural flush to your cheeks, creating a youthful fall-inspired look.
      </p>
      <ul class="text-[#333333]">
        <li><strong class="text-[#EE6352]">Cream Blush:</strong> These blushes provide a subtle, radiant glow.</li>
      </ul>
    </div>
  </div>

  <div class="bg-[#F7F7F7] p-12 mt-12 rounded-lg shadow-md transform hover:scale-105 hover:shadow-2xl duration-300">
    <h3 class="text-[#262522] text-3xl font-semibold text-center">7. Eyes That Pop</h3>
    <p class="text-[#333333] text-lg leading-relaxed mt-6 text-center">
      Fall is the perfect time to make your eyes the focal point of your makeup look. Bold eyeliner, well-defined lashes, and vibrant eyeshadow shades like gold, copper, and deep purple will make your eyes pop.
    </p>
  </div>

  <div class="text-center mt-12">
    <h3 class="text-[#262522] text-3xl font-semibold">Conclusion</h3>
    <p class="text-[#333333] text-lg leading-relaxed mt-4">
      Embrace the colors of autumn and let your makeup speak the season s language. Try these fall trends and discover your perfect autumn look!
    </p>
  </div>
</section>
       `

  },

  {
    id: 2,
    image: "/Assets/b2.jpg",
    title: "Reviewing the Latest Beauty Innovations in 2023",
    description: "Stay on the cutting edge of beauty with a comprehensive review of the latest innovations in the industry. From skincare breakthroughs to high-tech beauty gadgets, explore what s new in 2023.",
    content: `
    <section class="bg-[#F7F7F7] py-12 px-6">
  <div class="text-center">
    <h1 class="text-4xl font-bold text-[#262522]">2023 Beauty Industry Innovations</h1>
    <p class="mt-4 text-lg text-[#333333] leading-relaxed">Explore the cutting-edge beauty products and technologies set to elevate our beauty routines to new heights in 2023.</p>
  </div>
</section>

<section class="max-w-7xl mx-auto px-6 py-12">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">Sustainable Beauty Practices and Devices</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">Sustainability is taking center stage in 2023 with eco-friendly packaging, plant-based ingredients, and cruelty-free products. Learn how beauty brands are embracing sustainability while innovating new beauty solutions.</p>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">Smart Skincare Devices</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">AI-powered skin analysis tools and smart cleansing devices are taking personalized skincare to the next level, offering at-home solutions that mimic professional spa treatments.</p>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">Biometric Beauty</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">Biometric data such as DNA and skin microbiome analysis is being used to create customized skincare formulations that cater to individual needs.</p>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">Virtual Try-Ons with AR</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">AR technology is transforming how we shop for beauty products, allowing virtual try-ons for makeup and skincare products to personalize the shopping experience.</p>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">AI-Powered Beauty and Skincare Solutions</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">AI is helping recommend personalized beauty products, track skin changes, and even provide customized skincare routines based on your preferences.</p>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">Personalized Skincare with AR and VR</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">AR and VR technologies enable immersive skincare experiences and virtual consultations, offering real-time personalized beauty advice.</p>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">Wellness and Self-Care Integration</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">Beauty brands are integrating wellness into their product lines, offering solutions that promote relaxation, stress relief, and mental well-being.</p>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">The Future of Beauty: Tech-Infused Treatments</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">At-home devices using red light therapy, microdermabrasion, and ultrasound will revolutionize skincare, providing professional-level treatments in the comfort of your home.</p>
    </div>
  </div>
</section>

    `

  },

  {
    id: 3,
    image: "/Assets/b3.jpg",
    title: "Reader Spotlight: Transformation Stories",
    description: "Witness the incredible transformations of our valued customers. Read real stories of beauty journeys, complete with before-and-after photos, and be inspired by the power of self-care.",
    content: `
        <div class="max-w-7xl mx-auto px-4 py-8">
  <p class="text-[#333333] text-lg leading-relaxed mb-8">Explore inspiring transformation stories from our readers. See how their skincare journeys, complete with before-and-after photos, have helped them achieve glowing, healthy skin. Get motivated by real experiences and the power of self-care. These personal stories are a testament to the effectiveness of a consistent skincare routine and the amazing results that can be achieved.</p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    <div class="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-2xl font-semibold mb-4">1. Overcoming Skin Challenges</h3>
      <p class="text-[#333333] text-lg leading-relaxed mb-4">From acne and dryness to glowing skin, our readers  persistence paid off. Skincare struggles are common, but with the right products and consistency, achieving clear, radiant skin is possible. Our readers share how they tackled their skin issues, including acne scars and dullness, and experienced remarkable transformations.</p>
      <ul class="list-disc pl-6">
        <li><strong class="text-[#EE6352]">Before</strong>: Dull, uneven skin with frequent breakouts.</li>
        <li><strong class="text-[#EE6352]">After</strong>: Radiant, smooth skin with a healthy glow and no breakouts.</li>
      </ul>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-2xl font-semibold mb-4">2. Hydration Boost</h3>
      <p class="text-[#333333] text-lg leading-relaxed mb-4">Hydrating serums and moisturizers have worked wonders for dry, flaky skin. Many of our readers struggled with tightness and dryness, but after incorporating hydrating products into their routines, they noticed their skin becoming soft, plump, and more hydrated.</p>
      <ul class="list-disc pl-6">
        <li><strong class="text-[#EE6352]">Before</strong>: Dry, flaky skin with redness and tightness.</li>
        <li><strong class="text-[#EE6352]">After</strong>: Nourished, hydrated skin that feels plump and healthy.</li>
      </ul>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-2xl font-semibold mb-4">3. Reducing Hyperpigmentation</h3>
      <p class="text-[#333333] text-lg leading-relaxed mb-4">Many readers had hyperpigmentation, dark spots, or uneven skin tone due to acne scars or sun exposure. With the use of brightening serums and exfoliators, they were able to reduce discoloration, revealing an even complexion and smoother skin texture.</p>
      <ul class="list-disc pl-6">
        <li><strong class="text-[#EE6352]">Before</strong>: Dark spots, post-acne scars, and uneven skin tone.</li>
        <li><strong class="text-[#EE6352]">After</strong>: Clear, even complexion with reduced pigmentation.</li>
      </ul>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-2xl font-semibold mb-4">4. Skin Firmness</h3>
      <p class="text-[#333333] text-lg leading-relaxed mb-4">Anti-aging products, such as serums and creams containing retinol or peptides, helped lift and firm the skin. Readers noticed visible reductions in fine lines and sagging, with their skin feeling more elastic and youthful.</p>
      <ul class="list-disc pl-6">
        <li><strong class="text-[#EE6352]">Before</strong>: Fine lines, sagging skin, and loss of elasticity.</li>
        <li><strong class="text-[#EE6352]">After</strong>: Firmer, lifted skin with reduced fine lines and wrinkles.</li>
      </ul>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-2xl font-semibold mb-4">5. Clear Skin</h3>
      <p class="text-[#333333] text-lg leading-relaxed mb-4">Acne-fighting products with salicylic acid, benzoyl peroxide, and natural ingredients have been game changers for many of our readers. Regular use of these products, along with a balanced skincare routine, cleared up breakouts and resulted in blemish-free, smooth skin.</p>
      <ul class="list-disc pl-6">
        <li><strong class="text-[#EE6352]">Before</strong>: Persistent acne, clogged pores, and regular breakouts.</li>
        <li><strong class="text-[#EE6352]">After</strong>: Clear skin with fewer breakouts and no active acne.</li>
      </ul>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-2xl font-semibold mb-4">6. Confidence Boost</h3>
      <p class="text-[#333333] text-lg leading-relaxed mb-4">Clear, healthy skin has been a huge confidence booster for our readers. Many shared how achieving their skincare goals made them feel more self-assured and allowed them to embrace their natural beauty with confidence. Healthy skin is not only a physical transformation but also a mental and emotional one.</p>
      <ul class="list-disc pl-6">
        <li><strong class="text-[#EE6352]">Before</strong>: Insecure about skin texture, breakouts, or discoloration.</li>
        <li><strong class="text-[#EE6352]">After</strong>: Confident and glowing, with no more skin-related insecurities.</li>
      </ul>
    </div>
    
  </div>

  <div class="bg-white p-8 mt-12 rounded-lg shadow-lg">
    <h3 class="text-[#262522] text-3xl font-semibold mb-6">Conclusion</h3>
    <p class="text-[#333333] text-lg leading-relaxed mb-6">These transformations show the power of skincare. Each journey highlights the importance of consistency, the right products, and embracing a skincare routine that works for your skin type. Start your own journey today, be patient, and experience the incredible difference it can make!</p>
  </div>
</div>

        `
  },
  {
    id: 4,
    image: "/Assets/b4.jpg",
    title: "Inside BB: Product Development Journey",
    description: "Take an exclusive behind-the-scenes look at the creation of beauty products. Learn about commitment to quality, innovation, and the meticulous process that goes into each product.",
    content: `
  <section class="bg-[#F7F7F7] py-12 px-6">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-[#262522]">Inside BB: Product Development Journey</h1>
      <p class="mt-4 text-lg text-[#333333] leading-relaxed">Take an exclusive behind-the-scenes look at the creation of beauty products. Learn about our commitment to quality, innovation, and the meticulous process that goes into each product.</p>
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-6 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
        <h3 class="text-[#262522] text-3xl font-semibold">The Concept: Turning Ideas into Reality</h3>
        <p class="text-[#333333] text-lg leading-relaxed mt-4">Our journey begins with a single idea: creating a product that solves a common beauty concern or enhances the daily routine. Our product development team spends countless hours researching current trends, customer feedback, and emerging ingredients to find solutions that address specific skin needs.</p>
      </div>
      
      <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
        <h3 class="text-[#262522] text-3xl font-semibold">Research & Development: Perfecting the Formula</h3>
        <p class="text-[#333333] text-lg leading-relaxed mt-4">Once the concept is clear, the next step is intensive research and development (R&D). This stage involves experimenting with different ingredients and formulations, keeping in mind both effectiveness and safety. Our R&D team works closely with dermatologists to ensure the product not only delivers the desired results but is also gentle on the skin.</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
      <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
        <h3 class="text-[#262522] text-3xl font-semibold">Testing: Ensuring Quality & Safety</h3>
        <p class="text-[#333333] text-lg leading-relaxed mt-4">Quality assurance is a cornerstone of our product development process. We conduct a series of rigorous tests to guarantee the safety and effectiveness of each product. These tests help us understand how the product performs under different conditions and on various skin types.</p>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
        <h3 class="text-[#262522] text-3xl font-semibold">Packaging Design: Aesthetic Meets Function</h3>
        <p class="text-[#333333] text-lg leading-relaxed mt-4">Packaging is an essential aspect of any beauty product. During the packaging design phase, our team focuses on creating packaging that preserves the product’s integrity, is easy to use, and reflects the brand’s aesthetic. We strive to use sustainable materials wherever possible, aligning with our commitment to eco-conscious beauty.</p>
      </div>
    </div>

    <div class="bg-[#F7F7F7] p-12 mt-12 rounded-lg shadow-md transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold text-center">Launch: Ready for the World</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-6 text-center">The final step in our product development journey is the product launch. This is where all the hard work and dedication come together to introduce the product to our customers. Our launch isn t just about selling; it s about sharing the story behind the product, its benefits, and how it can improve your beauty routine.</p>
    </div>

    <div class="text-center mt-12">
      <h3 class="text-[#262522] text-3xl font-semibold">Conclusion</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">From concept to launch, every step of the product development journey is a labor of love, designed to bring you the best beauty products. Our commitment to quality, innovation, and customer satisfaction drives everything we do, ensuring that each product exceeds expectations. Thank you for being part of our journey, and stay tuned for more exciting launches!</p>
    </div>
  </section>
`
  },

  {
    id: 5,
    image: "/Assets/b5.jpg",
    title: "Exclusive Interview with Jenna Milhouse @missyb",
    description: "Gain insights from a renowned beauty influencer or expert in an exclusive interview. Discover their favorite beauty tips, product recommendations, and the secrets behind their success in the industry.",
    content: `
        <section class="bg-[#F7F7F7] py-12 px-6">
  <div class="text-center">
    <h1 class="text-4xl font-bold text-[#262522]">Exclusive Interview with Jenna Milhouse @missyb</h1>
    <p class="mt-4 text-lg text-[#333333] leading-relaxed">
      Gain insights from a renowned beauty influencer or expert in an exclusive interview. Discover their favorite beauty tips, product recommendations, and the secrets behind their success in the industry.
    </p>
  </div>
</section>

<section class="max-w-7xl mx-auto px-6 py-12">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">1. Jenna’s Journey: From Passion to Profession</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">
        Jenna Milhouse (@missyb) started her career as a beauty enthusiast, sharing her passion for makeup on social media. Over the years, her talent and authenticity helped her grow a loyal following, eventually launching her into the world of professional beauty influencing.
      </p>
      <ul class="text-[#333333]">
        <li><strong class="text-[#EE6352]">The Start:</strong> Jenna shares how a simple love for makeup led to her thriving career.</li>
        <li><strong class="text-[#EE6352]">Challenges:</strong> The ups and downs of building a beauty brand in a competitive industry.</li>
      </ul>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">2. Beauty Tips from Jenna Milhouse</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">
        Jenna is known for her simple yet effective beauty routines. In this segment, she shares some of her go-to tips for maintaining healthy skin, enhancing natural beauty, and perfecting a flawless makeup look.
      </p>
      <ul class="text-[#333333]">
        <li><strong class="text-[#EE6352]">Skin Care Routine:</strong> Jenna’s secret to glowing skin.</li>
        <li><strong class="text-[#EE6352]">Makeup Tips:</strong> Must-have products for a quick and flawless look.</li>
        <li><strong class="text-[#EE6352]">Beauty Essentials:</strong> Her top 5 beauty products that everyone should have.</li>
      </ul>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">3. Product Recommendations from @missyb</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">
        With years of experience testing beauty products, Jenna has a deep understanding of what works and what doesn’t. Here are her top product recommendations for both beginners and seasoned beauty enthusiasts.
      </p>
      <ul class="text-[#333333]">
        <li><strong class="text-[#EE6352]">Best Foundation:</strong> The perfect base for every skin type.</li>
        <li><strong class="text-[#EE6352]">Must-Have Eyeshadow Palette:</strong> Versatile and pigmented for any look.</li>
        <li><strong class="text-[#EE6352]">Skincare Savior:</strong> Jenna’s favorite moisturizer for all-day hydration.</li>
      </ul>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">4. Behind the Scenes: Jenna’s Content Creation Process</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">
        Jenna gives us a peek into her creative process, from brainstorming video ideas to creating stunning beauty looks. She shares how she stays inspired and maintains consistency with her content while staying true to her personal style.
      </p>
      <ul class="text-[#333333]">
        <li><strong class="text-[#EE6352]">Content Planning:</strong> How Jenna plans and organizes her content for maximum impact.</li>
        <li><strong class="text-[#EE6352]">Filming Tips:</strong> How she captures high-quality beauty content with simple equipment.</li>
      </ul>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">5. Jenna’s Advice for Aspiring Beauty Influencers</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">
        Jenna shares her top advice for anyone looking to start their own beauty influencer journey. From growing an authentic following to working with brands, she provides helpful insights for anyone dreaming of a career in beauty.
      </p>
      <ul class="text-[#333333]">
        <li><strong class="text-[#EE6352]">Building Your Brand:</strong> The importance of authenticity in the beauty industry.</li>
        <li><strong class="text-[#EE6352]">Consistency:</strong> Why consistency is key to growing a successful platform.</li>
      </ul>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">6. The Future of Beauty: Jenna’s Predictions</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">
        Jenna looks ahead to the future of beauty, discussing upcoming trends, innovations, and the impact of social media on the industry. She shares her predictions on what will define beauty in the coming years.
      </p>
      <ul class="text-[#333333]">
        <li><strong class="text-[#EE6352]">Sustainable Beauty:</strong> A shift toward eco-friendly products and practices.</li>
        <li><strong class="text-[#EE6352]">Tech in Beauty:</strong> How technology is transforming skincare and makeup.</li>
      </ul>
    </div>
  </div>

  <div class="bg-[#F7F7F7] p-12 mt-12 rounded-lg shadow-md transform hover:scale-105 hover:shadow-2xl duration-300">
    <h3 class="text-[#262522] text-3xl font-semibold text-center">7. Jenna’s Final Thoughts</h3>
    <p class="text-[#333333] text-lg leading-relaxed mt-6 text-center">
      Jenna wraps up the interview with her thoughts on the beauty industry’s evolution and the importance of staying true to yourself while navigating a fast-paced digital world. Her final words of encouragement are for anyone striving to make their mark in beauty.
    </p>
  </div>

  <div class="text-center mt-12">
    <h3 class="text-[#262522] text-3xl font-semibold">Conclusion</h3>
    <p class="text-[#333333] text-lg leading-relaxed mt-4">
      From insights on building a career as a beauty influencer to advice on content creation and industry trends, Jenna Milhouse s journey is an inspiration to all beauty enthusiasts. Stay tuned for more interviews and tips from the experts!
    </p>
  </div>
</section>
        `
  },
  {
    id: 6,
    image: "/Assets/b6.jpg",
    title: "Step-by-Step Guide: Achieving the Perfect Smokey Eye",
    description: "Witness the incredible transformations of our valued customers. Read real stories of beauty journeys, complete with before-and-after photos, and be inspired by the power of self-care.",
    content: `
        <section class="bg-[#F7F7F7] py-12 px-6">
  <div class="text-center">
    <h1 class="text-4xl font-bold text-[#262522]">Step-by-Step Guide: Achieving the Perfect Smokey Eye</h1>
    <p class="mt-4 text-lg text-[#333333] leading-relaxed">
      Witness the incredible transformations of our valued customers. Read real stories of beauty journeys, complete with before-and-after photos, and be inspired by the power of self-care.
    </p>
  </div>
</section>

<section class="max-w-7xl mx-auto px-6 py-12">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">1. Prep Your Eyes: Start with a Clean Canvas</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">
        Before applying any makeup, it s essential to prep the eyelids. Cleanse and moisturize to create a smooth base for the eyeshadow. Use an eyeshadow primer to enhance the longevity of your look and keep the eyeshadow from creasing.
      </p>
      <ul class="text-[#333333]">
        <li><strong class="text-[#EE6352]">Cleansing:</strong> Start with a gentle eye makeup remover or cleanser.</li>
        <li><strong class="text-[#EE6352]">Priming:</strong> Apply a thin layer of eyeshadow primer to prevent creasing.</li>
      </ul>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">2. Apply the Base Color: Choose a Neutral Shade</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">
        Start with a neutral base color across the eyelid. A soft beige or light brown works well as a base and will help the darker colors blend smoothly. Apply the base color with a fluffy brush, covering the entire eyelid.
      </p>
      <ul class="text-[#333333]">
        <li><strong class="text-[#EE6352]">Blending:</strong> Blend the neutral shade evenly across the lid.</li>
        <li><strong class="text-[#EE6352]">Layering:</strong> Build the base layer for a flawless foundation.</li>
      </ul>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">3. Create Depth: Add a Darker Shade to the Crease</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">
        To create that signature smokey eye look, apply a darker shade to the crease of the eyelid. This will give your eyes depth and dimension. Blend the dark color in a windshield wiper motion to create a soft, diffused line.
      </p>
      <ul class="text-[#333333]">
        <li><strong class="text-[#EE6352]">Choice of Dark Shade:</strong> Use dark brown, gray, or black, depending on your desired intensity.</li>
        <li><strong class="text-[#EE6352]">Blending:</strong> Blend the darker shade upwards into the crease for a seamless look.</li>
      </ul>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">4. Intensify the Look: Apply the Darkest Shade to the Outer Corner</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">
        For maximum drama, add a deep, dark color to the outer corner of the eye. This will add definition and intensify the smokey effect. Use a small, dense brush to apply the color in a V shape, focusing on the outer edge.
      </p>
      <ul class="text-[#333333]">
        <li><strong class="text-[#EE6352]">Outer V Shape:</strong> Apply the darkest shade in a V shape to the outer corners.</li>
        <li><strong class="text-[#EE6352]">Build Gradually:</strong> Start with a small amount and build for more intensity.</li>
      </ul>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">5. Blend, Blend, Blend: Seamless Transitions</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">
        Blending is key to achieving a flawless smokey eye. Use a clean blending brush to soften any harsh lines and ensure a smooth transition between the light and dark shades. Blend the colors until there are no visible lines.
      </p>
      <ul class="text-[#333333]">
        <li><strong class="text-[#EE6352]">Gentle Blending:</strong> Blend the edges gently to avoid disrupting the color placement.</li>
        <li><strong class="text-[#EE6352]">Patience:</strong> Take your time blending for a smooth, smokey finish.</li>
      </ul>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">6. Add the Finishing Touch: Highlight the Inner Corner</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">
        To brighten up the eyes, apply a light, shimmery shade to the inner corners of your eyes. This will contrast beautifully with the smokey darkness and open up the eyes, making them look larger and more awake.
      </p>
      <ul class="text-[#333333]">
        <li><strong class="text-[#EE6352]">Inner Corner Highlight:</strong> Choose a shimmery white, gold, or champagne color.</li>
        <li><strong class="text-[#EE6352]">Small Brush:</strong> Use a small brush to apply the highlight precisely.</li>
      </ul>
    </div>
  </div>

  <div class="bg-[#F7F7F7] p-12 mt-12 rounded-lg shadow-md transform hover:scale-105 hover:shadow-2xl duration-300">
    <h3 class="text-[#262522] text-3xl font-semibold text-center">7. Complete the Look: Lashes and Liner</h3>
    <p class="text-[#333333] text-lg leading-relaxed mt-6 text-center">
      The final step in achieving the perfect smokey eye is to finish with mascara and eyeliner. Apply a few coats of mascara to add volume and length to your lashes. If you prefer, add a winged eyeliner for extra drama and definition.
    </p>
  </div>

  <div class="text-center mt-12">
    <h3 class="text-[#262522] text-3xl font-semibold">Conclusion</h3>
    <p class="text-[#333333] text-lg leading-relaxed mt-4">
      With these simple steps, you can create the perfect smokey eye look for any occasion. The key is to blend well and gradually build up the intensity. Don t be afraid to experiment with different colors and techniques until you find the perfect smokey eye that works for you!
    </p>
  </div>
</section>
        `
  },
  {
    id: 7,
    image: "/Assets/b7.jpg",
    title: "The Best Lip Colors for Every Season: From Bold to Nude",
    description: "Explore the top lip colors for each season, from bold reds to soft pinks and nudes. Learn how to pair the right shade with your overall makeup look and skin tone to achieve a perfect pout all year round",
    content: `
        <section class="bg-[#F7F7F7] py-12 px-6">
  <div class="text-center">
    <h1 class="text-4xl font-bold text-[#262522]">The Best Lip Colors for Every Season: From Bold to Nude</h1>
    <p class="mt-4 text-lg text-[#333333] leading-relaxed">Explore the top lip colors for each season, from bold reds to soft pinks and nudes. Learn how to pair the right shade with your overall makeup look and skin tone to achieve a perfect pout all year round.</p>
  </div>
</section>

<section class="max-w-7xl mx-auto px-6 py-12">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">Spring: Soft Pinks and Peaches</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">Spring is all about fresh, light, and airy looks. Soft pinks and peachy shades are perfect for this season, giving your lips a natural and youthful glow. Pair these shades with a light makeup look featuring dewy skin and a touch of mascara for a fresh, spring-ready vibe.</p>
    </div>
    
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">Summer: Bold Reds and Corals</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">Summer calls for bold, vibrant shades that stand out. Think fiery reds and bright corals that complement sun-kissed skin. These shades add a pop of color to your look, perfect for both daytime outings and evening events. Pair with bronzed makeup for a sunlit glow.</p>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">Autumn: Warm Browns and Deep Plums</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">Autumn is all about rich, warm tones. Deep reds, browns, and plum shades are perfect for this season, bringing out the cozy and chic feel of fall. Pair these lip colors with golden eyeshadow and warm-toned makeup for a seasonal look that’s perfect for chilly evenings.</p>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">Winter: Bold Berries and Nudes</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">Winter makeup often focuses on darker, more dramatic shades. Bold berry tones like wine or cranberry bring warmth to your complexion. Alternatively, a soft nude lip provides a chic, understated look when paired with bold eye makeup, perfect for the holiday season.</p>
    </div>
  </div>

  <div class="bg-[#F7F7F7] p-12 mt-12 rounded-lg shadow-md transform hover:scale-105 hover:shadow-2xl duration-300">
    <h3 class="text-[#262522] text-3xl font-semibold text-center">Choosing the Right Lip Color for Your Skin Tone</h3>
    <p class="text-[#333333] text-lg leading-relaxed mt-6 text-center">The key to a perfect pout is finding the right lip color for your skin tone. Fair skin tones tend to look great in light pinks and peachy shades, while medium skin tones can rock coral and rose hues. For darker skin tones, bold reds, purples, and deep browns are stunning choices. Don t be afraid to experiment and find what makes you feel confident!</p>
  </div>

  <div class="text-center mt-12">
    <h3 class="text-[#262522] text-3xl font-semibold">Conclusion</h3>
    <p class="text-[#333333] text-lg leading-relaxed mt-4">From soft pinks in spring to bold berries in winter, there’s a lip color for every season and every mood. Whether you re feeling fresh and light or bold and daring, the perfect lip color can enhance your overall makeup look and reflect the beauty of the season. Embrace the versatility of your lips and enjoy experimenting with new shades throughout the year!</p>
  </div>
</section>
        `
  },
  {
    id: 8,
    image: "/Assets/b8.jpg",
    title: "How to Create a Flawless Winged Eyeliner Every Time",
    description: "Struggling with winged eyeliner? Winged eyeliner can be a tricky technique to master Learn expert techniques and tips to help you master this iconic look, no matter your eye shape or skill level",
    content: `
        <section class="bg-[#F7F7F7] py-12 px-6">
  <div class="text-center">
    <h1 class="text-4xl font-bold text-[#262522]">How to Create a Flawless Winged Eyeliner Every Time</h1>
    <p class="mt-4 text-lg text-[#333333] leading-relaxed">Struggling with winged eyeliner? Learn expert techniques and tips to help you master this iconic look, no matter your eye shape or skill level.</p>
  </div>
</section>

<section class="max-w-7xl mx-auto px-6 py-12">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">Step 1: Start with a Clean Base</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">Before applying eyeliner, make sure your eyelids are clean and free of any excess oils. Apply an eyeshadow primer to ensure that your eyeliner stays in place all day. This step will provide a smooth surface and help your eyeliner glide on effortlessly.</p>
    </div>
    
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">Step 2: Choose the Right Eyeliner</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">The type of eyeliner you use plays a huge role in achieving a precise wing. Liquid eyeliners are great for sharp lines, while gel liners offer a more blended, softer finish. Choose one that suits your desired look and comfort level.</p>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">Step 3: Find the Perfect Angle</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">To create the perfect wing, start by placing your eyeliner along your upper lash line, extending the line towards the outer corner of your eye. Use your lower lash line as a guide by drawing an imaginary line from the corner of your eye to the tail of your brow. This will help create symmetry and a natural angle.</p>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">Step 4: Draw the Wing</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">Start from the outer corner of your eye and draw a small line upward, following the guide you created earlier. Once you re happy with the wings length, draw a line back toward the middle of your eyelid, connecting it to your upper lash line to create a triangle shape. Fill in the triangle with eyeliner.</p>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">Step 5: Perfect the Shape</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">If your wing isnt perfect, dont worry! Use a cotton swab or makeup remover to clean up any mistakes and sharpen the edge of the wing. This will help define the shape and ensure a clean, crisp finish.</p>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">Step 6: Set with Powder</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">Set your eyeliner with a matching eyeshadow or translucent powder to lock it in place. This helps prevent smudging or fading throughout the day, especially if you have oily skin or are in a humid environment.</p>
    </div>
  </div>

  <div class="bg-[#F7F7F7] p-12 mt-12 rounded-lg shadow-md transform hover:scale-105 hover:shadow-2xl duration-300">
    <h3 class="text-[#262522] text-3xl font-semibold text-center">Additional Tips for Different Eye Shapes</h3>
    <p class="text-[#333333] text-lg leading-relaxed mt-6 text-center">- For hooded eyes: Focus on creating a thicker wing and avoid drawing the eyeliner too close to the crease.  
    - For almond-shaped eyes: Experiment with subtle wings or dramatic cat eyes depending on your mood.  
    - For round eyes: Try drawing a longer, more angled wing to elongate the shape.</p>
  </div>

  <div class="text-center mt-12">
    <h3 class="text-[#262522] text-3xl font-semibold">Conclusion</h3>
    <p class="text-[#333333] text-lg leading-relaxed mt-4">Winged eyeliner can be a tricky technique to master, but with the right tips and practice, you’ll be able to create a flawless wing every time. From choosing the right eyeliner to perfecting the shape, these steps will help you achieve the bold, dramatic look you desire. Don’t be afraid to experiment with different angles and lengths to find what works best for you!</p>
  </div>
</section>
        `
  },
  {
    id: 9,
    image: "/Assets/b9.jpg",
    title: "How to Remove Your Makeup Properly: End of the Day Skincare Routine",
    description: "Proper makeup removal is essential for healthy skin. Discover the best methods and products for removing your makeup without irritating your skin or causing breakouts. ",
    content: `
        <section class="bg-[#F7F7F7] py-12 px-6">
  <div class="text-center">
    <h1 class="text-4xl font-bold text-[#262522]">How to Remove Your Makeup Properly: End of the Day Skincare Routine</h1>
    <p class="mt-4 text-lg text-[#333333] leading-relaxed">Proper makeup removal is essential for healthy skin. Discover the best methods and products for removing your makeup without irritating your skin or causing breakouts.</p>
  </div>
</section>

<section class="max-w-7xl mx-auto px-6 py-12">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">Step 1: Start with a Makeup Remover</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">Before washing your face, use a gentle makeup remover to break down your makeup. Look for a product that’s suitable for your skin type, such as an oil-based remover for heavy makeup or a micellar water for lighter makeup. Apply the remover with a cotton pad or directly onto your skin, then gently wipe away your makeup.</p>
    </div>
    
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">Step 2: Double Cleanse</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">After removing makeup, use a gentle cleanser to remove any remaining impurities, dirt, and makeup residue. Double cleansing ensures your skin is truly clean. Choose a cleanser that suits your skin’s needs—whether it’s hydrating, exfoliating, or purifying—then gently massage it into your skin for 30 seconds to a minute before rinsing it off.</p>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">Step 3: Use a Toner</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">After cleansing, use a toner to balance your skin’s pH levels and tighten pores. Choose a toner that’s alcohol-free and packed with soothing ingredients, such as aloe vera or rose water. Gently apply the toner with a cotton pad, focusing on the areas where your makeup was the heaviest.</p>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl duration-300">
      <h3 class="text-[#262522] text-3xl font-semibold">Step 4: Moisturize Your Skin</h3>
      <p class="text-[#333333] text-lg leading-relaxed mt-4">After toning, it’s essential to lock in moisture. Use a moisturizer that suits your skin type to ensure your skin stays hydrated and healthy. For dry skin, opt for a richer cream, while those with oily skin might prefer a lightweight gel. Gently massage the moisturizer into your skin to restore its natural moisture balance.</p>
    </div>
  </div>

  <div class="bg-[#F7F7F7] p-12 mt-12 rounded-lg shadow-md transform hover:scale-105 hover:shadow-2xl duration-300">
    <h3 class="text-[#262522] text-3xl font-semibold text-center">Step 5: Optional Night Care</h3>
    <p class="text-[#333333] text-lg leading-relaxed mt-6 text-center">For extra care, consider adding a night serum or oil to your routine. Products containing retinol, hyaluronic acid, or antioxidants can help rejuvenate your skin overnight, ensuring you wake up with a fresh, glowing complexion.</p>
  </div>

  <div class="text-center mt-12">
    <h3 class="text-[#262522] text-3xl font-semibold">Conclusion</h3>
    <p class="text-[#333333] text-lg leading-relaxed mt-4">Removing your makeup properly at the end of the day is key to maintaining healthy, radiant skin. By following a thorough skincare routine that includes makeup removal, cleansing, toning, and moisturizing, you’ll keep your skin clean and hydrated. Never skip this essential step, and your skin will thank you!</p>
  </div>
</section>

        `
  }


] 