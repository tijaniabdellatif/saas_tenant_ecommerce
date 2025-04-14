// // Handle mouse enter in content area to focus it for scrolling
// import React, { useState, useRef, useEffect, RefObject } from 'react';
// import { motion, useScroll } from 'framer-motion';
// import { cn } from '@/libs/utils';
// import SectionContent from '../Components/Utilities/SectionContent';

// Define the static terms data with more sections for testing
// const staticTermsData = [
//     {
//         id: 1,
//         slug: "introduction",
//         title: "Introduction",
//         content: `<p class="text-gray-700 mb-4">Welcome to our <span class="font-bold">platform</span>. These Terms of Use govern your use of our website, services, and products. By accessing or using our platform, you agree to be bound by these Terms of Use and our <a href="/privacy" class="text-blue-600 hover:underline">Privacy Policy</a>.</p><p class="text-gray-700 mb-4">If you do not agree with any part of these terms, please do not use our services.</p><div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6"><p class="text-blue-700">Please read these terms carefully before proceeding.</p></div>`,
//         order_index: 0,
//         is_active: true,
//         subsections: []
//     },
//     {
//         id: 2,
//         slug: "account-responsibilities",
//         title: "Account Responsibilities",
//         content: `<p class="text-gray-700 mb-4">When you create an account with us, you must provide accurate, complete, and up-to-date information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p><ul class="list-disc pl-5 my-4 text-gray-700"><li class="mb-2">Keep your password secure</li><li class="mb-2">Update your information when it changes</li><li class="mb-2">Logout from shared devices</li></ul>`,
//         order_index: 1,
//         is_active: true,
//         subsections: [
//             {
//                 id: 1,
//                 section_id: 2,
//                 slug: "account-creation",
//                 title: "Account Creation",
//                 content: `<p class="text-gray-700 mb-4">To use certain features of our service, you may need to create an account. You must provide accurate and complete information when creating your account.</p><div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6"><p class="text-yellow-700">Important: You may not use another person's personal information to create an account without their explicit permission.</p></div>`,
//                 order_index: 0,
//                 is_active: true
//             },
//             {
//                 id: 2,
//                 section_id: 2,
//                 slug: "account-security",
//                 title: "Account Security",
//                 content: `<p class="text-gray-700 mb-4">You are responsible for safeguarding the password and security questions that you use to access our services. We recommend using strong, unique passwords and enabling two-factor authentication where available.</p><p class="text-gray-700 mb-4">You should not disclose your password to any third party.</p><ul class="list-disc pl-5 my-4 text-gray-700"><li class="mb-2">Use a password manager if possible</li><li class="mb-2">Enable <span class="font-semibold">two-factor authentication</span> for extra security</li><li class="mb-2">Change your password regularly</li></ul>`,
//                 order_index: 1,
//                 is_active: true
//             }
//         ]
//     },
//     {
//         id: 3,
//         slug: "acceptable-use",
//         title: "Acceptable Use",
//         content: `<p class="text-gray-700 mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms of Use. You agree not to use our services in any way that violates any applicable local, state, national, or international law or regulation.</p><p class="text-gray-700 mb-4">Our platform is designed to help you achieve your goals, but we expect responsible usage.</p>`,
//         order_index: 2,
//         is_active: true,
//         subsections: [
//             {
//                 id: 3,
//                 section_id: 3,
//                 slug: "prohibited-activities",
//                 title: "Prohibited Activities",
//                 content: `<p class="text-gray-700 mb-4">You may not engage in any of the following prohibited activities:</p><ol class="list-decimal pl-5 my-4 text-gray-700"><li class="mb-2">Copying, distributing, or disclosing any part of our services in any medium</li><li class="mb-2">Using any automated system to access our services</li><li class="mb-2">Transmitting spam, chain letters, or other unsolicited email</li><li class="mb-2">Attempting to interfere with or compromise the system integrity or security</li><li class="mb-2">Taking any action that imposes an unreasonable load on our infrastructure</li></ol>`,
//                 order_index: 0,
//                 is_active: true
//             }
//         ]
//     },
//     {
//         id: 4,
//         slug: "intellectual-property",
//         title: "Intellectual Property Rights",
//         content: `<p class="text-gray-700 mb-4">The content on our platform, including text, graphics, logos, and software, is owned by us or our licensors and is protected by copyright, trademark, and other intellectual property laws.</p><p class="text-gray-700 mb-4">You may not use, reproduce, distribute, or create derivative works from our content without our express permission.</p>`,
//         order_index: 3,
//         is_active: true,
//         subsections: [
//             {
//                 id: 4,
//                 section_id: 4,
//                 slug: "user-content",
//                 title: "User Generated Content",
//                 content: `<p class="text-gray-700 mb-4">By posting content on our platform, you grant us a non-exclusive, royalty-free, worldwide license to use, modify, publicly display, and distribute that content on our platform.</p><p class="text-gray-700 mb-4">You represent and warrant that you own or have the necessary rights to the content you post, and that your content does not infringe upon any third-party rights.</p>`,
//                 order_index: 0,
//                 is_active: true
//             },
//             {
//                 id: 5,
//                 section_id: 4,
//                 slug: "dmca",
//                 title: "DMCA Compliance",
//                 content: `<p class="text-gray-700 mb-4">We respect the intellectual property rights of others and expect our users to do the same. If you believe that your work has been copied in a way that constitutes copyright infringement, please provide us with the following information:</p><ul class="list-disc pl-5 my-4 text-gray-700"><li class="mb-2">A physical or electronic signature of the copyright owner</li><li class="mb-2">Identification of the copyrighted work claimed to have been infringed</li><li class="mb-2">Identification of the material that is claimed to be infringing</li><li class="mb-2">Your contact information</li><li class="mb-2">A statement that you have a good faith belief that use of the material is not authorized by the copyright owner</li></ul>`,
//                 order_index: 1,
//                 is_active: true
//             }
//         ]
//     },
//     {
//         id: 5,
//         slug: "privacy-data",
//         title: "Privacy and Data Protection",
//         content: `<p class="text-gray-700 mb-4">We collect and process information about you in accordance with our Privacy Policy. By using our services, you consent to such processing and you warrant that all data provided by you is accurate.</p><p class="text-gray-700 mb-4">We take reasonable measures to protect your personal information, but we cannot guarantee its absolute security.</p>`,
//         order_index: 4,
//         is_active: true,
//         subsections: [
//             {
//                 id: 6,
//                 section_id: 5,
//                 slug: "data-collection",
//                 title: "Data Collection and Usage",
//                 content: `<p class="text-gray-700 mb-4">We collect various types of information, including information you provide to us, information we collect automatically, and information from third-party sources.</p><p class="text-gray-700 mb-4">We use this information to provide and improve our services, communicate with you, and for other purposes as described in our Privacy Policy.</p>`,
//                 order_index: 0,
//                 is_active: true
//             }
//         ]
//     },
//     {
//         id: 6,
//         slug: "limitation-liability",
//         title: "Limitation of Liability",
//         content: `<p class="text-gray-700 mb-4">To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p><p class="text-gray-700 mb-4">Our liability is limited to the amount you paid for the service in question, or $100, whichever is greater.</p>`,
//         order_index: 5,
//         is_active: true,
//         subsections: []
//     },
//     {
//         id: 7,
//         slug: "term-termination",
//         title: "Term and Termination",
//         content: `<p class="text-gray-700 mb-4">These Terms will remain in effect until terminated by you or us. You may terminate these Terms by closing your account and discontinuing use of our services.</p><p class="text-gray-700 mb-4">We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms.</p>`,
//         order_index: 6,
//         is_active: true,
//         subsections: []
//     },
//     {
//         id: 8,
//         slug: "governing-law",
//         title: "Governing Law",
//         content: `<p class="text-gray-700 mb-4">These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we are headquartered, without regard to its conflict of law provisions.</p><p class="text-gray-700 mb-4">Any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts in our jurisdiction.</p>`,
//         order_index: 7,
//         is_active: true,
//         subsections: []
//     },
//     {
//         id: 9,
//         slug: "changes-terms",
//         title: "Changes to Terms",
//         content: `<p class="text-gray-700 mb-4">We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.</p><p class="text-gray-700 mb-4">Your continued use of our service after such changes constitutes your acceptance of the new Terms.</p>`,
//         order_index: 8,
//         is_active: true,
//         subsections: []
//     },
//     {
//         id: 10,
//         slug: "contact-us",
//         title: "Contact Us",
//         content: `<p class="text-gray-700 mb-4">If you have any questions about these Terms, please contact us at support@example.com.</p><p class="text-gray-700 mb-4">We are committed to addressing any concerns you may have and will do our best to resolve any issues in a timely manner.</p>`,
//         order_index: 9,
//         is_active: true,
//         subsections: []
//     }
// ];

// interface TermsSubsection {
//     id: number;
//     section_id: number;
//     slug: string;
//     title: string;
//     content: string;
//     order_index: number;
//     is_active: boolean;
// }

// interface TermsSection {
//     id: number;
//     slug: string;
//     title: string;
//     content: string;
//     order_index: number;
//     is_active: boolean;
//     subsections: TermsSubsection[];
// }

// // Define a type for the section refs
// interface SectionRefs {
//     [key: string]: RefObject<HTMLDivElement>;
// }

// export default function TermsSection() {
//     // State for tracking active section
//     const [activeSection, setActiveSection] = useState<string>('introduction');

//     // Create refs for each section and subsection
//     const sectionRefs = useRef<SectionRefs>({});
//     const contentRef = useRef<HTMLDivElement>(null);

//     const handleContentMouseEnter = () => {
//         if (contentRef.current) {
//             contentRef.current.focus();
//         }
//     };

//     // Initialize the refs on component mount
//     useEffect(() => {
//         // Create refs for all sections and subsections
//         staticTermsData.forEach(section => {
//             sectionRefs.current[section.slug] = React.createRef<HTMLDivElement>();

//             // Create refs for subsections if any
//             section.subsections?.forEach(subsection => {
//                 sectionRefs.current[subsection.slug] = React.createRef<HTMLDivElement>();
//             });
//         });

//         // Set initial active section
//         setActiveSection('introduction');

//         // Wait for content ref to be available
//         const setupObserver = () => {
//             if (!contentRef.current) return;

//             // Set up intersection observer to track which section is in view
//             const observer = new IntersectionObserver(
//                 (entries) => {
//                     // Find the most visible entry
//                     let mostVisible = { id: '', ratio: 0 };

//                     entries.forEach(entry => {
//                         if (entry.isIntersecting && entry.intersectionRatio > mostVisible.ratio) {
//                             const id = entry.target.id;
//                             if (id) {
//                                 mostVisible = { id, ratio: entry.intersectionRatio };
//                             }
//                         }
//                     });

//                     // Update active section if we found a visible one
//                     if (mostVisible.id && mostVisible.id !== activeSection) {
//                         setActiveSection(mostVisible.id);
//                         console.log("Active section changed to:", mostVisible.id);
//                     }
//                 },
//                 {
//                     root: contentRef.current,
//                     rootMargin: '-10% 0px -20% 0px',
//                     threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7]
//                 }
//             );

//             // Observe all section and subsection elements
//             Object.entries(sectionRefs.current).forEach(([key, ref]) => {
//                 if (ref.current) {
//                     observer.observe(ref.current);
//                 }
//             });

//             return observer;
//         };

//         // Setup observer and store for cleanup
//         const observer = setupObserver();

//         return () => {
//             // Clean up observer on component unmount
//             observer?.disconnect();
//         };
//     }, []);

//     // Flag to prevent scroll handler from changing active section during programmatic scrolling
//     const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);

//     // Function to scroll to a section when clicked in TOC
//     const scrollToSection = (sectionId: string) => {
//         // Set active section immediately on click
//         setActiveSection(sectionId);

//         // Set flag to prevent scroll handler from changing it
//         setIsProgrammaticScroll(true);

//         const section = sectionRefs.current[sectionId];
//         if (section && section.current && contentRef.current) {
//             // Get position to scroll to
//             const sectionTop = section.current.offsetTop;
//             const contentTop = contentRef.current.scrollTop;
//             const headerOffset = 80;
//             const targetPosition = sectionTop - headerOffset;

//             // Scroll with smooth behavior
//             contentRef.current.scrollTo({
//                 top: targetPosition,
//                 behavior: 'smooth'
//             });

//             // Reset flag after animation completes
//             setTimeout(() => {
//                 setIsProgrammaticScroll(false);
//             }, 800); // Animation takes longer with more content
//         }
//     };

//     // Function to determine if the section should be filled (passed)
//     const isSectionPassed = (sectionIndex: number): boolean => {
//         // Create a flattened array of all section and subsection slugs
//         const allSections = staticTermsData.flatMap(section => [
//             section.slug,
//             ...(section.subsections?.map(sub => sub.slug) || [])
//         ]);

//         // Find the index of the current active section
//         const activeIndex = allSections.indexOf(activeSection);

//         // Find the index of the current section's main slug
//         const currentSectionMainSlug = staticTermsData[sectionIndex].slug;
//         const currentSectionIndex = allSections.indexOf(currentSectionMainSlug);

//         // Section is passed if active section comes after this section
//         return activeIndex > currentSectionIndex && activeIndex !== -1;
//     };

//     // Improved scroll event handler using debounce to avoid too many updates
//     useEffect(() => {
//         // Debounce function to limit how often the scroll handler fires
//         const debounce = (func: Function, wait: number) => {
//             let timeout: NodeJS.Timeout;
//             return function (this: any, ...args: any[]) {
//                 clearTimeout(timeout);
//                 timeout = setTimeout(() => func.apply(this, args), wait);
//             };
//         };

//         // The actual scroll handler
//         const handleScroll = () => {
//             // Skip processing if we're in the middle of a programmatic scroll
//             if (isProgrammaticScroll || !contentRef.current) return;

//             // Get the content container's bounding rect
//             const contentRect = contentRef.current.getBoundingClientRect();
//             const topThreshold = contentRect.top + 100; // 100px from the top of the content area

//             // Find the first section that's below the threshold
//             let activeId = '';
//             let smallestDistance = Infinity;

//             Object.entries(sectionRefs.current).forEach(([id, ref]) => {
//                 if (ref.current) {
//                     const rect = ref.current.getBoundingClientRect();
//                     const distanceFromTop = rect.top - topThreshold;

//                     // If section is at or below threshold and closer than current closest
//                     if (distanceFromTop >= -10 && distanceFromTop < smallestDistance) {
//                         smallestDistance = distanceFromTop;
//                         activeId = id;
//                     }
//                 }
//             });

//             // Update active section if we found one and it's different
//             if (activeId && activeId !== activeSection) {
//                 setActiveSection(activeId);
//             }
//         };

//         // Debounced version of scroll handler
//         const debouncedHandleScroll = debounce(handleScroll, 50);

//         // Add event listener
//         const contentElement = contentRef.current;
//         if (contentElement) {
//             contentElement.addEventListener('scroll', debouncedHandleScroll);
//         }

//         return () => {
//             // Clean up
//             if (contentElement) {
//                 contentElement.removeEventListener('scroll', debouncedHandleScroll);
//             }
//         };
//     }, [activeSection, isProgrammaticScroll]);

//     return (
//         <section className="overflow-x-clip overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#b0b9c626] py-10 md:py-12 pb-20 font-poppins">
//             <SectionContent classes="pricing-head_before relative">
//                 {/* Main container */}
//                 <div className="bg-white rounded-lg shadow-lg overflow-hidden max-h-[90vh] md:h-[800px] lg:h-[850px]">
//                     <div className="flex flex-col h-full md:flex-row">
//                         {/* Table of Contents - Left side */}
//                         <div className="md:w-1/3 lg:w-1/4 bg-gray-100 p-4 md:p-6 overflow-hidden h-[300px] md:h-full">
//                             <h2 className="mb-4 text-lg font-bold md:text-xl text-neutral-800 md:mb-6">Terms of Service</h2>

//                             {/* Scrollable table of contents */}
//                             <div className="h-full pb-6 pr-2 overflow-y-auto" style={{ maxHeight: "calc(100% - 60px)" }}>
//                                 <div className="relative">
//                                     {/* Vertical timeline line - static background */}
//                                     <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-gray-200 rounded-full" />

//                                     {/* Colored progress line that grows based on active section */}
//                                     <div
//                                         className="absolute left-3.5 top-0 w-0.5 bg-[#D4AF37] rounded-full transition-all duration-300"
//                                         style={{
//                                             height: (() => {
//                                                 // Find the index of the active section
//                                                 const allSections = staticTermsData.flatMap(section => [
//                                                     section.slug,
//                                                     ...(section.subsections?.map(sub => sub.slug) || [])
//                                                 ]);
//                                                 const activeIndex = allSections.indexOf(activeSection);
//                                                 const totalSections = allSections.length;

//                                                 if (activeIndex === -1) return '0%';

//                                                 // Calculate percentage based on position in overall list
//                                                 return `${((activeIndex + 1) / totalSections) * 100}%`;
//                                             })()
//                                         }}
//                                     />

//                                     {staticTermsData.map((section, index) => (
//                                         <div key={section.slug}>
//                                             {/* Main section in TOC */}
//                                             <div className="relative mb-3">
//                                                 <button
//                                                     type="button"
//                                                     className={`w-full text-left rounded-md pl-8 md:pl-10 pr-2 md:pr-3 py-2 md:py-2.5 cursor-pointer hover:bg-white hover:bg-opacity-70 transition-colors relative
//                                                 ${(section.slug === activeSection || section.subsections?.some(sub => sub.slug === activeSection)) ? 'bg-white bg-opacity-80' : 'opacity-75'}`}
//                                                     onClick={() => scrollToSection(section.slug)}
//                                                     aria-pressed={activeSection === section.slug}
//                                                 >
//                                                     {/* Numbered circle - changes fill based on active state and progress */}
//                                                     <div
//                                                         className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center shadow-sm z-10 transition-all duration-300
//                                                     ${(section.slug === activeSection || section.subsections?.some(sub => sub.slug === activeSection))
//                                                                 ? 'bg-[#D4AF37] text-white'
//                                                                 : isSectionPassed(index)
//                                                                     ? 'bg-[#D4AF37] bg-opacity-30 text-white'
//                                                                     : 'bg-white border-2 border-gray-300'
//                                                             }`}
//                                                     >
//                                                         <span className="text-sm font-medium">
//                                                             {index + 1}
//                                                         </span>
//                                                     </div>

//                                                     {/* Section title */}
//                                                     <span className={`text-sm font-medium transition-colors duration-300
//                                                     ${(section.slug === activeSection || section.subsections?.some(sub => sub.slug === activeSection)) ? 'text-[#D4AF37]' : 'text-neutral-800'}`}
//                                                     >
//                                                         {section.title}
//                                                     </span>
//                                                 </button>
//                                             </div>

//                                             {/* Subsections in TOC - simplified design */}
//                                             {section.subsections && section.subsections.length > 0 && (
//                                                 <div className="mb-4 ml-10 space-y-1">
//                                                     {section.subsections.map((subsection) => (
//                                                         <button
//                                                             key={subsection.slug}
//                                                             type="button"
//                                                             className={`w-full text-left py-1.5 px-3 cursor-pointer rounded transition-colors text-xs
//                                                         ${activeSection === subsection.slug
//                                                                     ? 'font-medium text-[#D4AF37] bg-white bg-opacity-70'
//                                                                     : 'text-gray-600 opacity-75 hover:bg-white hover:bg-opacity-40'}`}
//                                                             onClick={() => scrollToSection(subsection.slug)}
//                                                             aria-pressed={activeSection === subsection.slug}
//                                                         >
//                                                             {subsection.title}
//                                                         </button>
//                                                     ))}
//                                                 </div>
//                                             )}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Main Content - Right side */}
//                         <div className="flex flex-col h-full overflow-hidden md:w-2/3 lg:w-3/4">
//                             {/* Fixed header part */}
//                             <div className="z-10 p-4 pt-4 pb-3 bg-white border-b border-gray-100 md:p-6 md:px-8 md:pt-6 md:pb-4">
//                                 <h1 className="text-xl font-bold md:text-2xl lg:text-3xl text-neutral-800">Terms of Service</h1>
//                                 <p className="mt-1 text-xs text-gray-500 md:text-sm">Updated April 2023</p>
//                             </div>

//                             {/* Scrollable content */}
//                             <div
//                                 ref={contentRef}
//                                 className="flex-grow p-4 pt-4 overflow-y-auto md:p-6 md:px-8 focus:outline-none"
//                                 onMouseEnter={handleContentMouseEnter}
//                                 tabIndex={0} // Make div focusable
//                             >
//                                 {/* Terms content sections */}
//                                 <div className="space-y-10">
//                                     {staticTermsData.map((section, index) => (
//                                         <div
//                                             key={section.slug}
//                                             id={section.slug}
//                                             ref={sectionRefs.current[section.slug]}
//                                             className="mb-10 scroll-mt-24"
//                                         >
//                                             <h2 className="flex items-center pb-2 mb-4 text-xl font-semibold border-b border-gray-100 text-neutral-800">
//                                                 <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-sm mr-3 transition-colors
//                                             ${activeSection === section.slug ? 'bg-[#D4AF37]' : 'bg-gray-400'}`}>
//                                                     {index + 1}
//                                                 </span>
//                                                 {section.title}
//                                             </h2>

//                                             {/* Section content */}
//                                             <div
//                                                 className="mb-6 prose-sm prose text-gray-600 max-w-none"
//                                                 dangerouslySetInnerHTML={{ __html: section.content }}
//                                             />

//                                             {/* Subsections */}
//                                             {section.subsections && section.subsections.length > 0 && (
//                                                 <div className="mt-6 ml-6 space-y-6">
//                                                     {section.subsections.map((subsection) => (
//                                                         <div
//                                                             key={subsection.slug}
//                                                             id={subsection.slug}
//                                                             ref={sectionRefs.current[subsection.slug]}
//                                                             className="scroll-mt-24"
//                                                         >
//                                                             <h3 className={`text-lg font-medium mb-3 flex items-center transition-colors
//                                                         ${activeSection === subsection.slug ? 'text-[#D4AF37]' : 'text-neutral-800'}`}>
//                                                                 <span className={`inline-block w-2 h-2 rounded-full mr-3 transition-colors
//                                                             ${activeSection === subsection.slug ? 'bg-[#D4AF37]' : 'bg-gray-400'}`}></span>
//                                                                 {subsection.title}
//                                                             </h3>
//                                                             <div
//                                                                 className="prose-sm prose text-gray-600 max-w-none"
//                                                                 dangerouslySetInnerHTML={{ __html: subsection.content }}
//                                                             />
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             )}
//                                         </div>
//                                     ))}
//                                 </div>

//                                 {/* Agreement section */}
//                                 <div className="flex flex-col items-center justify-between gap-4 pt-6 mt-12 border-t sm:flex-row">
//                                     <div className="flex items-center">
//                                         <input type="checkbox" id="agree" className="mr-2" />
//                                         <label htmlFor="agree" className="text-sm text-gray-600">Send copy to my email</label>
//                                     </div>
//                                     <button className="px-6 py-3 bg-[#D4AF37] hover:bg-[#C39E27] text-white font-medium rounded-md transition-colors w-full sm:w-auto">
//                                         I AGREE
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </SectionContent>
//         </section>
//     );
// }

/**
 * 
 * import { DocumentViewer } from "../Components/DocumentViewer";
import { staticTermsData } from "@/libs/constants";

export default function TermsSection() {

    return (

        <DocumentViewer
            data={staticTermsData}
            title="Terms of Service"
            lastUpdated="April 2023"
            onAgree={() => console.log('agree')}
            primaryColor="#a78519"
        />
    );
}
 */
import { DocumentViewer } from '../Components/DocumentViewer';
import { staticTermsData } from '@/libs/constants';

export default function TermsSection() {

    const handleAgree = () => {
        console.log('User agreed to terms of service');
        // You could redirect, show confirmation, etc.
    };

    return (


          <div className='mb-6'>
            
            <DocumentViewer
                data={staticTermsData}
                title="Terms of Service"
                lastUpdated="April 2023"
                showAgreement={true}
                primaryColor="#D4AF37"
                onAgree={handleAgree}
            />
          </div>
    
    
            

    );
}

