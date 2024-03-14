import useInViewSection from "../../utils/useInViewSection";

export default function Contact() {
  const { ref } = useInViewSection("contact", 0.5);

  return <div ref={ref}>Contact</div>;
}
