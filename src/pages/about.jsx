import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import HomePromotion from "@components/promotions/home-promotion";
import promoImgTwo from "@assets/img/promotion/2.png";
import HomeThreeFeature from "@components/features/home-three-feature";
import AboutPromotion from "@components/promotions/about-promotion";
import AboutTestimonial from "@components/testimonials/about-testimonial";
import HomeTeacher from "@components/teachers/home-teacher";
import AboutFact from "@components/facts/about-fact";
import HeaderFour from "@layout/headers/headerFour";
import AboutSection from "@components/promotions/about-section1";
import AboutMissionSection from "@components/classes/about-mission-section";


export default function About() {
  return (
    <Wrapper>
      <SEO pageTitle={'About'} />
      <HeaderFour />
      <Breadcrumb title="About" subTitle="About" />
      <AboutSection promo_space="pt-120 pb-60" promoImg={promoImgTwo} />
      {/* <HomeThreeFeature wave={true} /> */}
      <AboutMissionSection wave={true} />
      <AboutPromotion />
      <AboutTestimonial />
      <HomeTeacher />
      <AboutFact />
      <HomeNewsletter />
      <Footer/>
    </Wrapper>
  )
}
