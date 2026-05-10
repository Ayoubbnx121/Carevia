/* CareVia — Booking & UI Logic */


        // ---------- TRANSLATIONS ----------
        const translations = {
            en: {
                navHome: "Home",
                navServices: "Services",
                navCaregivers: "Caregivers",
                heroTitle: "Compassionate care for your beloved elders",
                heroSub: "Professional, trustworthy caregivers across Morocco.",
                bookBtn: "Book a caregiver",
                urgentBookBtn: "Urgent booking",
                heroStat1Title: "Selected caregivers",
                heroStat1Desc: "Profiles presented in a clearer and more reassuring way for families.",
                heroStat2Title: "Flexible booking",
                heroStat2Desc: "Choose the service, timing, and caregiver without changing your current flow.",
                heroStat3Title: "Faster contact",
                heroStat3Desc: "A smoother path for WhatsApp, phone, and family follow-up.",
                servicesTitle: "Our services",
                servicesIntro: "Clear support options for daily care, medical visits, personal assistance, and companionship.",
                consultTitle: "Need help choosing the right service?",
                consultText: "Start with the booking flow now, then finalize details with WhatsApp or phone once your contact info is added.",
                consultBtn: "Start booking",
                serviceHome: "Home Care",
                serviceHomeDesc: "Daily assistance, hygiene, meals & comfort",
                serviceMedical: "Medical Accompaniment",
                serviceMedicalDesc: "Clinic visits, medication reminders",
                servicePersonal: "Personal Care",
                servicePersonalDesc: "Bathing, grooming, dressing support",
                serviceCompanion: "Companionship",
                serviceCompanionDesc: "Conversation, walks, emotional support",
                meetCaregiversTitle: "Meet some caregivers",
                ageStudent: "21 years • Student • Morocco",
                ageNurse: "35 years • Nurse • Morocco",
                ageAssistant: "28 years • Assistant • Morocco",
                servicesDetailTitle: "Our services in detail",
                whyChooseUs: "Why choose us?",
                homeWhy1: "Personalized care plans",
                homeWhy2: "Kind and experienced caregivers",
                homeWhy3: "24/7 availability",
                serviceHomeDetail: "Our home care service provides assistance with daily activities such as bathing, dressing, meal preparation, and light housekeeping. We ensure your loved one feels safe and comfortable in their own home.",
                medicalDetail: "We accompany elders to medical appointments, handle pharmacy pickups, and ensure medication schedules are followed. Our staff are trained to communicate with healthcare professionals.",
                medicalWhy1: "Safe transport arrangement",
                medicalWhy2: "Medication reminders",
                medicalWhy3: "Report back to family",
                personalDetail: "Assistance with hygiene, grooming, and mobility. Our caregivers are trained to provide respectful and dignified support for daily personal tasks.",
                personalWhy1: "Respectful and gentle approach",
                personalWhy2: "Fall prevention techniques",
                personalWhy3: "Continuous supervision if needed",
                companionDetail: "Social interaction, conversation, walks, and emotional support. We combat loneliness and keep seniors engaged and happy.",
                companionWhy1: "Friendly, screened companions",
                companionWhy2: "Activities tailored to interests",
                companionWhy3: "Regular family updates",
                caregiversListTitle: "Our dedicated caregivers",
                backToCaregivers: "Back to caregivers",
                backHome: "Back to Home",
                backToServices: "Back to Services",
                backToService: "Back to Service",
                clientInfoTitle: "Tell us about yourself",
                firstName: "First Name *",
                lastName: "Last Name *",
                city: "City",
                phone: "Phone Number * (Moroccan format)",
                email: "Email Address *",
                continueBtn: "Continue →",
                selectDateTime: "Select date & time (24h)",
                dateLabel: "Date (from today onward)",
                selectHours: "Select hours (click multiple)",
                noHours: "No hours selected",
                confirmChooseCaregiver: "Confirm & choose caregiver",
                editInfo: "Edit your info",
                selectCaregiverTitle: "Select a caregiver",
                backToTimeSlot: "Back to time slot",
                paymentMethodTitle: "Payment method",
                cashOption: "Cash (pay on arrival)",
                cardOption: "Credit card",
                cardNumberPlaceholder: "Card number",
                expiryPlaceholder: "MM/YY",
                cvvPlaceholder: "CVV",
                confirmBookingBtn: "Confirm booking",
                summaryViewTitle: "Booking Summary",
                summaryClientSection: "Client Information",
                summaryBookingSection: "Booking Details",
                summaryPricingSection: "Pricing",
                agreeTermsLabel: "I agree to the Terms & Conditions and confirm the booking details above are correct.",
                agreeDisclaimerLabel: "Disclaimer: I confirm that the information provided is accurate and I take full responsibility for its correctness.",
                disclaimerLinkText: "Disclaimer",
                agreeDisclaimerSuffix: ": I confirm that the information provided is accurate and I take full responsibility for its correctness.",
                chooseDifferent: "Choose different caregiver",
                confirmationTitle: "Appointment successfully scheduled!",
                confirmationText: "We will contact you as soon as possible to confirm the details.",
                returnHome: "Return to home",
                footerTagline: "Compassionate care for your beloved elders.",
                quickLinks: "Quick Links",
                contactUs: "Contact Us",
                followUs: "Follow Us",
                validationRequired: "This field is required.",
                validationCardNumber: "Card number must be exactly 16 digits.",
                validationExpiry: "Expiry date must be in MM/YY format (e.g., 04/26) and in the future.",
                validationCvv: "CVV must be exactly 3 digits.",
                validationDate: "Please select a date.",
                validationHours: "Please select at least one hour.",
                validationPhone: "Please enter a valid Moroccan phone number (e.g., +2126XXXXXXXX or 06XXXXXXXX).",
                validationEmail: "Please enter a valid email address containing '@'.",
                validationName: "Please enter your first and last name.",
                bookThisService: "Book this service",
                selectServiceTitle: "Select a service",
                heroNote: "A smoother and more reassuring booking experience for families.",
                trustChip1: "Carefully selected caregiver profiles",
                trustChip2: "Flexible scheduling by the hour",
                trustChip3: "Multilingual interface for families",
                trustChip4: "Available across Morocco",
                howItWorksTitle: "How it works",
                howItWorksSub: "A simple flow that helps families book the right support without confusion.",
                step1Title: "Choose the right service",
                step1Desc: "Start with home care, medical accompaniment, personal care, or companionship.",
                step2Title: "Set your details and timing",
                step2Desc: "Pick the date, select hours, and share the client information needed for follow-up.",
                step3Title: "Review and confirm",
                step3Desc: "Choose a caregiver, review the summary, and confirm the request in a reassuring final step.",
                whyFamiliesTitle: "Why families choose CareVia",
                whyFamiliesSub: "The goal is not only to look good, but to make the service feel clear, human, and trustworthy.",
                benefit1Title: "Warm and human presentation",
                benefit1Desc: "Families quickly understand the service and feel that the platform is built around real care needs.",
                benefit2Title: "Clear booking steps",
                benefit2Desc: "Each step is separated clearly, which reduces hesitation and makes booking feel easier.",
                benefit3Title: "Profiles with reassuring details",
                benefit3Desc: "Service cards and caregiver profiles create a stronger feeling of clarity before confirmation.",
                benefit4Title: "Comfortable on mobile too",
                benefit4Desc: "The interface keeps the same flow while remaining easier to use on small screens.",
                softBadge1: "More trust",
                softBadge2: "Clearer decisions",
                softBadge3: "Gentler user experience",
                ctaBandTitle: "Ready to request care with confidence?",
                ctaBandText: "You can keep the same booking logic and still make the experience feel more premium, reassuring, and conversion-friendly.",
                ctaBandBtn: "Start booking",
                faqTitle: "Frequently asked questions",
                faq1q: "How does booking work?",
                faq1a: "You choose a service, add client details, select the time, choose a caregiver, then confirm the request.",
                faq2q: "Can I choose the caregiver myself?",
                faq2a: "Yes. The flow already lets families review available caregivers before the final payment and confirmation step.",
                faq3q: "Is the process adapted for families using phones?",
                faq3a: "Yes. The layout keeps the same dynamic while staying easier to read and tap on smaller screens.",
                faq4q: "Can I later replace the placeholder contact details?",
                faq4a: "Yes. Phone, WhatsApp, email, and social links can be updated quickly from one config block in the script.",
                progressService: "Service",
                progressInfo: "Info",
                progressSchedule: "Schedule",
                progressCaregiver: "Caregiver",
                progressPayment: "Payment",
                progressSummary: "Summary",
                progressConfirm: "Confirmed"
            },
            ar: {
                navHome: "الرئيسية",
                navServices: "الخدمات",
                navCaregivers: "مقدمو الرعاية",
                heroTitle: "رعاية حنونة لكبار السن",
                heroSub: "مقدمو رعاية محترفون وموثوقون في منزلك أينما كنتم في المغرب",
                bookBtn: "احجز مقدم رعاية",
                urgentBookBtn: "حجز مستعجل",
                heroStat1Title: "مقدمو رعاية مختارون",
                heroStat1Desc: "عرض أوضح وأكثر طمأنة لملفات مقدمي الرعاية أمام العائلات.",
                heroStat2Title: "حجز مرن",
                heroStat2Desc: "اختيار الخدمة والوقت ومقدم الرعاية بنفس المسار الحالي بدون تعقيد.",
                heroStat3Title: "تواصل أسرع",
                heroStat3Desc: "طريق أسهل نحو واتساب والهاتف ومتابعة العائلة.",
                servicesTitle: "خدماتنا",
                servicesIntro: "خيارات واضحة للرعاية اليومية والمرافقة الطبية والعناية الشخصية والرفقة.",
                consultTitle: "محتاج مساعدة لاختيار الخدمة المناسبة؟",
                consultText: "ابدأ الحجز الآن، وبعدها يمكن تأكيد التفاصيل عبر واتساب أو الهاتف بعد إضافة معلومات التواصل.",
                consultBtn: "ابدأ الحجز",
                serviceHome: "الرعاية المنزلية",
                serviceHomeDesc: "مساعدة يومية، نظافة، وجبات وراحة",
                serviceMedical: "مرافقة طبية",
                serviceMedicalDesc: "زيارات عيادية، تذكير بالأدوية",
                servicePersonal: "عناية شخصية",
                servicePersonalDesc: "استحمام، تنظيف، دعم في الارتداء",
                serviceCompanion: "رفقة",
                serviceCompanionDesc: "محادثة، نزهات، دعم عاطفي",
                meetCaregiversTitle: "تعرف على بعض مقدمي الرعاية",
                ageStudent: "٢١ سنة • طالب • المغرب",
                ageNurse: "٣٥ سنة • ممرضة • المغرب",
                ageAssistant: "٢٨ سنة • مساعد • المغرب",
                servicesDetailTitle: "خدماتنا بالتفصيل",
                whyChooseUs: "لماذا تختارنا؟",
                homeWhy1: "خطط رعاية مخصصة",
                homeWhy2: "مقدمو رعاية لطفاء وذوو خبرة",
                homeWhy3: "توافر ٢٤/٧",
                serviceHomeDetail: "تقدم خدمة الرعاية المنزلية لدينا المساعدة في الأنشطة اليومية مثل الاستحمام واللباس وإعداد الوجبات والتدبير المنزلي الخفيف. نضمن أن يشعر من تحب بالأمان والراحة في منزله.",
                medicalDetail: "نرافق كبار السن إلى المواعيد الطبية، ونتولى استلام الأدوية من الصيدلية، ونتأكد من اتباع جداول الأدوية. موظفونا مدربون على التواصل مع المتخصصين في الرعاية الصحية.",
                medicalWhy1: "ترتيب نقل آمن",
                medicalWhy2: "تذكير بالأدوية",
                medicalWhy3: "تقرير للعائلة",
                personalDetail: "مساعدة في النظافة والاستمالة والتنقل. مقدمونا مدربون على تقديم دعم محترم وكريم للمهام الشخصية اليومية.",
                personalWhy1: "نهج محترم ولطيف",
                personalWhy2: "تقنيات منع السقوط",
                personalWhy3: "إشراف مستمر إذا لزم الأمر",
                companionDetail: "تفاعل اجتماعي، محادثة، نزهات، ودعم عاطفي. نحارب الوحدة ونساعد كبار السن على البقاء نشطين وسعداء.",
                companionWhy1: "رفقاء ودودون ومُدققون",
                companionWhy2: "أنشطة مصممة حسب الاهتمامات",
                companionWhy3: "تحديثات منتظمة للعائلة",
                caregiversListTitle: "مقدمو الرعاية المخلصون لدينا",
                backToCaregivers: "العودة إلى قائمة مقدمي الرعاية",
                backHome: "العودة إلى الرئيسية",
                backToServices: "العودة إلى الخدمات",
                backToService: "العودة إلى الخدمة",
                clientInfoTitle: "أخبرنا عن نفسك",
                firstName: "الاسم الأول *",
                lastName: "اسم العائلة *",
                city: "المدينة",
                phone: "رقم الهاتف * (صيغة مغربية)",
                email: "البريد الإلكتروني *",
                continueBtn: "متابعة ←",
                selectDateTime: "اختر التاريخ والوقت (24 ساعة)",
                dateLabel: "التاريخ (من اليوم فصاعداً)",
                selectHours: "اختر الساعات (اضغط لاختيار متعدد)",
                noHours: "لم يتم اختيار أي ساعة",
                confirmChooseCaregiver: "تأكيد واختيار مقدم الرعاية",
                editInfo: "تعديل بياناتك",
                selectCaregiverTitle: "اختر مقدم رعاية",
                backToTimeSlot: "العودة لاختيار الوقت",
                paymentMethodTitle: "طريقة الدفع",
                cashOption: "نقداً (الدفع عند الوصول)",
                cardOption: "بطاقة ائتمان",
                cardNumberPlaceholder: "رقم البطاقة",
                expiryPlaceholder: "شهر/سنة",
                cvvPlaceholder: "CVV",
                confirmBookingBtn: "تأكيد الحجز",
                summaryViewTitle: "ملخص الحجز",
                summaryClientSection: "معلومات العميل",
                summaryBookingSection: "تفاصيل الحجز",
                summaryPricingSection: "التسعير",
                agreeTermsLabel: "أوافق على الشروط والأحكام وأؤكد صحة تفاصيل الحجز المذكورة أعلاه.",
                agreeDisclaimerLabel: "إخلاء المسؤولية: أقر بأن المعلومات المقدمة صحيحة وأتحمل المسؤولية الكاملة عن دقتها.",
                disclaimerLinkText: "إخلاء المسؤولية",
                agreeDisclaimerSuffix: ": أقر بأن المعلومات المقدمة صحيحة وأتحمل المسؤولية الكاملة عن دقتها.",
                chooseDifferent: "اختيار مقدم رعاية آخر",
                confirmationTitle: "تم جدولة الموعد بنجاح!",
                confirmationText: "سنتواصل معك في أقرب وقت ممكن لتأكيد التفاصيل.",
                returnHome: "العودة إلى الرئيسية",
                footerTagline: "رعاية حنونة لكبار السن.",
                quickLinks: "روابط سريعة",
                contactUs: "اتصل بنا",
                followUs: "تابعنا",
                validationRequired: "هذا الحقل مطلوب.",
                validationCardNumber: "يجب أن يتكون رقم البطاقة من 16 رقماً بالضبط.",
                validationExpiry: "يجب أن يكون تاريخ الانتهاء بصيغة MM/YY (مثال: 04/26) ويكون في المستقبل.",
                validationCvv: "يجب أن يتكون CVV من 3 أرقام بالضبط.",
                validationDate: "الرجاء اختيار تاريخ.",
                validationHours: "الرجاء اختيار ساعة واحدة على الأقل.",
                validationPhone: "الرجاء إدخال رقم هاتف مغربي صحيح (مثل +2126XXXXXXXX أو 06XXXXXXXX).",
                validationEmail: "الرجاء إدخال بريد إلكتروني صحيح يحتوي على '@'.",
                validationName: "الرجاء إدخال الاسم الأول واسم العائلة.",
                bookThisService: "احجز هذه الخدمة",
                selectServiceTitle: "اختر خدمة",
                heroNote: "تجربة حجز أكثر سلاسة وطمأنينة للعائلات.",
                trustChip1: "ملفات مقدمي رعاية مختارة بعناية",
                trustChip2: "جدولة مرنة حسب الساعات",
                trustChip3: "واجهة متعددة اللغات للعائلات",
                trustChip4: "متوفرون في جميع أنحاء المغرب",
                howItWorksTitle: "كيف يعمل",
                howItWorksSub: "مسار بسيط يساعد العائلات على حجز الدعم المناسب بدون ارتباك.",
                step1Title: "اختر الخدمة المناسبة",
                step1Desc: "ابدأ بالرعاية المنزلية أو المرافقة الطبية أو العناية الشخصية أو الرفقة.",
                step2Title: "حدد معلوماتك والتوقيت",
                step2Desc: "اختر التاريخ والساعات وأدخل معلومات العميل الضرورية للمتابعة.",
                step3Title: "راجع وأكد",
                step3Desc: "اختر مقدم الرعاية وراجع الملخص ثم أكد الطلب في خطوة أخيرة مطمئنة.",
                whyFamiliesTitle: "لماذا تختار العائلات CareVia",
                whyFamiliesSub: "الهدف ليس فقط أن يبدو الموقع جميلاً، بل أن تكون الخدمة واضحة وإنسانية وموثوقة.",
                benefit1Title: "عرض إنساني ودافئ",
                benefit1Desc: "تفهم العائلات الخدمة بسرعة وتشعر أن المنصة مبنية على احتياجات رعاية حقيقية.",
                benefit2Title: "خطوات حجز واضحة",
                benefit2Desc: "كل خطوة منفصلة بوضوح مما يقلل التردد ويجعل الحجز أسهل.",
                benefit3Title: "ملفات تعريف مطمئنة",
                benefit3Desc: "بطاقات الخدمات وملفات مقدمي الرعاية تمنح وضوحاً أكبر قبل التأكيد.",
                benefit4Title: "مريح على الهاتف أيضاً",
                benefit4Desc: "الواجهة تحافظ على نفس الديناميكية وتبقى أسهل في القراءة والضغط على الشاشات الصغيرة.",
                softBadge1: "ثقة أكبر",
                softBadge2: "قرارات أوضح",
                softBadge3: "تجربة ألطف",
                ctaBandTitle: "جاهز لطلب الرعاية بثقة؟",
                ctaBandText: "يمكنك الحفاظ على نفس منطق الحجز وفي نفس الوقت تجعل التجربة أكثر فخامة وطمأنينة وقابلة للتحويل.",
                ctaBandBtn: "ابدأ الحجز",
                faqTitle: "الأسئلة الشائعة",
                faq1q: "كيف تتم عملية الحجز؟",
                faq1a: "تختار الخدمة ثم تضيف معلومات العميل وتحدد الوقت وتختار مقدم الرعاية ثم تؤكد الطلب.",
                faq2q: "هل يمكنني اختيار مقدم الرعاية بنفسي؟",
                faq2a: "نعم. المسار الحالي يسمح للعائلات بمراجعة مقدمي الرعاية المتاحين قبل خطوة الدفع والتأكيد النهائية.",
                faq3q: "هل العملية مناسبة للعائلات التي تستعمل الهاتف؟",
                faq3a: "نعم. التخطيط يحافظ على نفس الديناميكية ويظل أسهل في القراءة والضغط على الشاشات الصغيرة.",
                faq4q: "هل يمكنني لاحقاً تغيير معلومات الاتصال التجريبية؟",
                faq4a: "نعم. الهاتف وواتساب والبريد وروابط التواصل يمكن تحديثها بسرعة من كتلة إعداد واحدة داخل السكريبت.",
                progressService: "الخدمة",
                progressInfo: "المعلومات",
                progressSchedule: "التوقيت",
                progressCaregiver: "المقدم",
                progressPayment: "الدفع",
                progressSummary: "الملخص",
                progressConfirm: "تأكيد"
            },
            fr: {
                navHome: "Accueil",
                navServices: "Services",
                navCaregivers: "Soignants",
                heroTitle: "Soins compatissants pour vos aînés bien-aimés",
                heroSub: "Des soignants professionnels et de confiance partout au Maroc.",
                bookBtn: "Réserver un soignant",
                urgentBookBtn: "Réservation urgente",
                heroStat1Title: "Soignants sélectionnés",
                heroStat1Desc: "Des profils présentés de manière plus claire et plus rassurante pour les familles.",
                heroStat2Title: "Réservation flexible",
                heroStat2Desc: "Choisissez le service, l’horaire et le soignant sans changer votre parcours actuel.",
                heroStat3Title: "Contact plus rapide",
                heroStat3Desc: "Un chemin plus fluide vers WhatsApp, le téléphone et le suivi familial.",
                servicesTitle: "Nos services",
                servicesIntro: "Des options claires pour l’aide quotidienne, les visites médicales, l’assistance personnelle et la compagnie.",
                consultTitle: "Besoin d’aide pour choisir le bon service ?",
                consultText: "Commencez la réservation maintenant, puis finalisez les détails par WhatsApp ou téléphone une fois vos contacts ajoutés.",
                consultBtn: "Commencer la réservation",
                serviceHome: "Soins à domicile",
                serviceHomeDesc: "Aide quotidienne, hygiène, repas et confort",
                serviceMedical: "Accompagnement médical",
                serviceMedicalDesc: "Visites cliniques, rappels de médicaments",
                servicePersonal: "Soins personnels",
                servicePersonalDesc: "Bain, toilette, aide à l'habillage",
                serviceCompanion: "Compagnie",
                serviceCompanionDesc: "Conversation, promenades, soutien émotionnel",
                meetCaregiversTitle: "Rencontrez quelques soignants",
                ageStudent: "21 ans • Étudiant • Maroc",
                ageNurse: "35 ans • Infirmière • Maroc",
                ageAssistant: "28 ans • Assistant • Maroc",
                servicesDetailTitle: "Nos services en détail",
                whyChooseUs: "Pourquoi nous choisir ?",
                homeWhy1: "Plans de soins personnalisés",
                homeWhy2: "Soignants gentils et expérimentés",
                homeWhy3: "Disponibilité 24h/24",
                serviceHomeDetail: "Notre service de soins à domicile fournit une assistance pour les activités quotidiennes telles que le bain, l'habillage, la préparation des repas et l'entretien ménager léger. Nous assurons que votre proche se sente en sécurité et à l'aise chez lui.",
                medicalDetail: "Nous accompagnons les personnes âgées aux rendez-vous médicaux, gérons les achats en pharmacie et assurons le suivi des médicaments. Notre personnel est formé pour communiquer avec les professionnels de santé.",
                medicalWhy1: "Organisation du transport sécurisé",
                medicalWhy2: "Rappels de médicaments",
                medicalWhy3: "Compte rendu à la famille",
                personalDetail: "Assistance pour l'hygiène, la toilette et la mobilité. Nos soignants sont formés pour fournir un soutien respectueux et digne pour les tâches personnelles quotidiennes.",
                personalWhy1: "Approche respectueuse et douce",
                personalWhy2: "Techniques de prévention des chutes",
                personalWhy3: "Surveillance continue si nécessaire",
                companionDetail: "Interaction sociale, conversation, promenades et soutien émotionnel. Nous combattons la solitude et maintenons l'engagement et la joie de vivre des aînés.",
                companionWhy1: "Compagnons amicaux et vérifiés",
                companionWhy2: "Activités adaptées aux centres d'intérêt",
                companionWhy3: "Nouvelles régulières à la famille",
                caregiversListTitle: "Nos soignants dévoués",
                backToCaregivers: "Retour aux soignants",
                backHome: "Retour à l'accueil",
                backToServices: "Retour aux services",
                backToService: "Retour au service",
                clientInfoTitle: "Parlez-nous de vous",
                firstName: "Prénom *",
                lastName: "Nom de famille *",
                city: "Ville",
                phone: "Numéro de téléphone * (format marocain)",
                email: "Adresse e-mail *",
                continueBtn: "Continuer →",
                selectDateTime: "Choisissez la date et l'heure (24h)",
                dateLabel: "Date (à partir d'aujourd'hui)",
                selectHours: "Sélectionnez les heures (cliquez multiples)",
                noHours: "Aucune heure sélectionnée",
                confirmChooseCaregiver: "Confirmer et choisir le soignant",
                editInfo: "Modifier vos informations",
                selectCaregiverTitle: "Choisissez un soignant",
                backToTimeSlot: "Retour au créneau horaire",
                paymentMethodTitle: "Moyen de paiement",
                cashOption: "Espèces (paiement à l'arrivée)",
                cardOption: "Carte de crédit",
                cardNumberPlaceholder: "Numéro de carte",
                expiryPlaceholder: "MM/AA",
                cvvPlaceholder: "CVV",
                confirmBookingBtn: "Confirmer la réservation",
                summaryViewTitle: "Récapitulatif de réservation",
                summaryClientSection: "Informations client",
                summaryBookingSection: "Détails de la réservation",
                summaryPricingSection: "Tarification",
                agreeTermsLabel: "J'accepte les conditions générales et confirme que les détails de réservation ci-dessus sont corrects.",
                agreeDisclaimerLabel: "Clause de non-responsabilité : Je confirme que les informations fournies sont exactes et j'en assume l'entière responsabilité.",
                disclaimerLinkText: "Clause de non-responsabilité",
                agreeDisclaimerSuffix: " : Je confirme que les informations fournies sont exactes et j'en assume l'entière responsabilité.",
                chooseDifferent: "Choisir un autre soignant",
                confirmationTitle: "Rendez-vous programmé avec succès !",
                confirmationText: "Nous vous contacterons dès que possible pour confirmer les détails.",
                returnHome: "Retour à l'accueil",
                footerTagline: "Soins compatissants pour vos aînés bien-aimés.",
                quickLinks: "Liens rapides",
                contactUs: "Contactez-nous",
                followUs: "Suivez-nous",
                validationRequired: "Ce champ est requis.",
                validationCardNumber: "Le numéro de carte doit comporter exactement 16 chiffres.",
                validationExpiry: "La date d'expiration doit être au format MM/AA (ex: 04/26) et dans le futur.",
                validationCvv: "Le CVV doit comporter exactement 3 chiffres.",
                validationDate: "Veuillez sélectionner une date.",
                validationHours: "Veuillez sélectionner au moins une heure.",
                validationPhone: "Veuillez entrer un numéro de téléphone marocain valide (ex: +2126XXXXXXXX ou 06XXXXXXXX).",
                validationEmail: "Veuillez entrer une adresse e-mail valide contenant '@'.",
                validationName: "Veuillez entrer votre prénom et nom.",
                bookThisService: "Réserver ce service",
                selectServiceTitle: "Choisissez un service",
                heroNote: "Une expérience de réservation plus fluide et plus rassurante pour les familles.",
                trustChip1: "Profils de soignants sélectionnés avec soin",
                trustChip2: "Planification flexible à l'heure",
                trustChip3: "Interface multilingue pour les familles",
                trustChip4: "Disponible partout au Maroc",
                howItWorksTitle: "Comment ça marche",
                howItWorksSub: "Un parcours simple qui aide les familles à réserver le bon accompagnement sans confusion.",
                step1Title: "Choisissez le bon service",
                step1Desc: "Commencez par les soins à domicile, l'accompagnement médical, les soins personnels ou la compagnie.",
                step2Title: "Renseignez vos détails et l'horaire",
                step2Desc: "Choisissez la date, sélectionnez les heures et ajoutez les informations nécessaires pour le suivi.",
                step3Title: "Vérifiez puis confirmez",
                step3Desc: "Choisissez un soignant, vérifiez le récapitulatif, puis confirmez la demande dans une dernière étape rassurante.",
                whyFamiliesTitle: "Pourquoi les familles choisissent CareVia",
                whyFamiliesSub: "L'objectif n'est pas seulement d'avoir un beau site, mais de rendre le service clair, humain et rassurant.",
                benefit1Title: "Présentation chaleureuse et humaine",
                benefit1Desc: "Les familles comprennent vite le service et sentent que la plateforme répond à de vrais besoins d'accompagnement.",
                benefit2Title: "Étapes de réservation claires",
                benefit2Desc: "Chaque étape est bien séparée, ce qui réduit l'hésitation et facilite la réservation.",
                benefit3Title: "Profils plus rassurants",
                benefit3Desc: "Les cartes de services et les profils des soignants renforcent la clarté avant la confirmation.",
                benefit4Title: "Confortable aussi sur mobile",
                benefit4Desc: "L'interface garde la même dynamique tout en restant plus facile à utiliser sur petit écran.",
                softBadge1: "Plus de confiance",
                softBadge2: "Décisions plus claires",
                softBadge3: "Expérience plus douce",
                ctaBandTitle: "Prêt à demander une aide en toute confiance ?",
                ctaBandText: "Vous pouvez garder la même logique de réservation tout en rendant l'expérience plus premium, rassurante et orientée conversion.",
                ctaBandBtn: "Commencer la réservation",
                faqTitle: "Questions fréquentes",
                faq1q: "Comment fonctionne la réservation ?",
                faq1a: "Vous choisissez un service, ajoutez les informations du client, sélectionnez l'horaire, choisissez un soignant, puis confirmez la demande.",
                faq2q: "Puis-je choisir le soignant moi-même ?",
                faq2a: "Oui. Le parcours actuel permet déjà aux familles de consulter les soignants disponibles avant l'étape finale de paiement et de confirmation.",
                faq3q: "Le processus est-il adapté aux familles qui utilisent le téléphone ?",
                faq3a: "Oui. La mise en page garde la même dynamique tout en restant plus simple à lire et à utiliser sur petit écran.",
                faq4q: "Puis-je remplacer plus tard les coordonnées provisoires ?",
                faq4a: "Oui. Le téléphone, WhatsApp, l'e-mail et les liens sociaux peuvent être modifiés rapidement depuis un seul bloc de configuration dans le script.",
                progressService: "Service",
                progressInfo: "Infos",
                progressSchedule: "Horaire",
                progressCaregiver: "Soignant",
                progressPayment: "Paiement",
                progressSummary: "Résumé",
                progressConfirm: "Confirmé"
            },
            es: {
                navHome: "Inicio",
                navServices: "Servicios",
                navCaregivers: "Cuidadores",
                heroTitle: "Atención compasiva para sus mayores queridos",
                heroSub: "Cuidadores profesionales y de confianza en todo Marruecos.",
                bookBtn: "Reservar un cuidador",
                urgentBookBtn: "Reserva urgente",
                heroStat1Title: "Cuidadores seleccionados",
                heroStat1Desc: "Perfiles presentados de forma más clara y tranquilizadora para las familias.",
                heroStat2Title: "Reserva flexible",
                heroStat2Desc: "Elige el servicio, el horario y el cuidador sin cambiar tu flujo actual.",
                heroStat3Title: "Contacto más rápido",
                heroStat3Desc: "Un camino más fluido hacia WhatsApp, teléfono y seguimiento familiar.",
                servicesTitle: "Nuestros servicios",
                servicesIntro: "Opciones claras para la atención diaria, visitas médicas, asistencia personal y compañía.",
                consultTitle: "¿Necesitas ayuda para elegir el servicio correcto?",
                consultText: "Comienza el proceso de reserva ahora y finaliza los detalles por WhatsApp o teléfono una vez añadida tu información de contacto.",
                consultBtn: "Iniciar reserva",
                serviceHome: "Atención en el hogar",
                serviceHomeDesc: "Asistencia diaria, higiene, comidas y confort",
                serviceMedical: "Acompañamiento médico",
                serviceMedicalDesc: "Visitas a clínicas, recordatorios de medicación",
                servicePersonal: "Cuidado personal",
                servicePersonalDesc: "Baño, aseo, apoyo para vestirse",
                serviceCompanion: "Compañía",
                serviceCompanionDesc: "Conversación, paseos, apoyo emocional",
                meetCaregiversTitle: "Conoce a algunos cuidadores",
                ageStudent: "21 años • Estudiante • Marruecos",
                ageNurse: "35 años • Enfermera • Marruecos",
                ageAssistant: "28 años • Asistente • Marruecos",
                servicesDetailTitle: "Nuestros servicios en detalle",
                whyChooseUs: "¿Por qué elegirnos?",
                homeWhy1: "Planes de atención personalizados",
                homeWhy2: "Cuidadores amables y experimentados",
                homeWhy3: "Disponibilidad 24/7",
                serviceHomeDetail: "Nuestro servicio de atención en el hogar ofrece asistencia con actividades diarias como baño, vestido, preparación de comidas y tareas domésticas ligeras. Garantizamos que su ser querido se sienta seguro y cómodo en su propio hogar.",
                medicalDetail: "Acompañamos a los mayores a citas médicas, gestionamos la recogida de medicamentos en farmacia y nos aseguramos de que se sigan los horarios de medicación. Nuestro personal está formado para comunicarse con profesionales de la salud.",
                medicalWhy1: "Organización de transporte seguro",
                medicalWhy2: "Recordatorios de medicación",
                medicalWhy3: "Informes a la familia",
                personalDetail: "Asistencia con higiene, aseo y movilidad. Nuestros cuidadores están formados para ofrecer un apoyo respetuoso y digno en las tareas personales diarias.",
                personalWhy1: "Enfoque respetuoso y amable",
                personalWhy2: "Técnicas de prevención de caídas",
                personalWhy3: "Supervisión continua si es necesario",
                companionDetail: "Interacción social, conversación, paseos y apoyo emocional. Combatimos la soledad y mantenemos a los mayores activos y felices.",
                companionWhy1: "Compañeros amigables y verificados",
                companionWhy2: "Actividades adaptadas a los intereses",
                companionWhy3: "Actualizaciones regulares a la familia",
                caregiversListTitle: "Nuestros cuidadores dedicados",
                backToCaregivers: "Volver a los cuidadores",
                backHome: "Volver al inicio",
                backToServices: "Volver a los servicios",
                backToService: "Volver al servicio",
                clientInfoTitle: "Cuéntenos sobre usted",
                firstName: "Nombre *",
                lastName: "Apellido *",
                city: "Ciudad",
                phone: "Número de teléfono * (formato marroquí)",
                email: "Correo electrónico *",
                continueBtn: "Continuar →",
                selectDateTime: "Elige fecha y hora (24h)",
                dateLabel: "Fecha (desde hoy)",
                selectHours: "Selecciona las horas (clic múltiple)",
                noHours: "No se ha seleccionado ninguna hora",
                confirmChooseCaregiver: "Confirmar y elegir cuidador",
                editInfo: "Editar tu información",
                selectCaregiverTitle: "Elige un cuidador",
                backToTimeSlot: "Volver a la franja horaria",
                paymentMethodTitle: "Método de pago",
                cashOption: "Efectivo (pago a la llegada)",
                cardOption: "Tarjeta de crédito",
                cardNumberPlaceholder: "Número de tarjeta",
                expiryPlaceholder: "MM/AA",
                cvvPlaceholder: "CVV",
                confirmBookingBtn: "Confirmar reserva",
                chooseDifferent: "Elegir otro cuidador",
                confirmationTitle: "¡Cita programada con éxito!",
                confirmationText: "Nos pondremos en contacto contigo lo antes posible para confirmar los detalles.",
                returnHome: "Volver al inicio",
                footerTagline: "Atención compasiva para sus mayores queridos.",
                quickLinks: "Enlaces rápidos",
                contactUs: "Contáctanos",
                followUs: "Síguenos",
                validationRequired: "Este campo es obligatorio.",
                validationCardNumber: "El número de tarjeta debe tener exactamente 16 dígitos.",
                validationExpiry: "La fecha de caducidad debe estar en formato MM/AA (ej: 04/26) y ser futura.",
                validationCvv: "El CVV debe tener exactamente 3 dígitos.",
                validationDate: "Por favor selecciona una fecha.",
                validationHours: "Por favor selecciona al menos una hora.",
                validationPhone: "Por favor introduce un número de teléfono marroquí válido (ej: +2126XXXXXXXX o 06XXXXXXXX).",
                validationEmail: "Por favor introduce un correo electrónico válido con '@'.",
                validationName: "Por favor introduce tu nombre y apellido.",
                bookThisService: "Reservar este servicio",
                selectServiceTitle: "Elige un servicio",
                heroNote: "Una experiencia de reserva más fluida y tranquilizadora para las familias.",
                trustChip1: "Perfiles de cuidadores seleccionados cuidadosamente",
                trustChip2: "Programación flexible por horas",
                trustChip3: "Interfaz multilingüe para familias",
                trustChip4: "Disponible en todo Marruecos",
                howItWorksTitle: "Cómo funciona",
                howItWorksSub: "Un proceso simple que ayuda a las familias a reservar el apoyo adecuado sin confusión.",
                step1Title: "Elige el servicio adecuado",
                step1Desc: "Comienza con atención en el hogar, acompañamiento médico, cuidado personal o compañía.",
                step2Title: "Añade tus datos y el horario",
                step2Desc: "Elige la fecha, selecciona las horas e introduce la información necesaria para el seguimiento.",
                step3Title: "Revisa y confirma",
                step3Desc: "Elige un cuidador, revisa el resumen y confirma la solicitud en un último paso tranquilizador.",
                whyFamiliesTitle: "Por qué las familias eligen CareVia",
                whyFamiliesSub: "El objetivo no es solo tener un sitio bonito, sino hacer que el servicio sea claro, humano y tranquilizador.",
                benefit1Title: "Presentación cálida y humana",
                benefit1Desc: "Las familias entienden el servicio rápidamente y sienten que la plataforma responde a necesidades reales de atención.",
                benefit2Title: "Pasos de reserva claros",
                benefit2Desc: "Cada paso está bien diferenciado, lo que reduce la duda y facilita la reserva.",
                benefit3Title: "Perfiles más tranquilizadores",
                benefit3Desc: "Las fichas de servicios y los perfiles de cuidadores refuerzan la claridad antes de la confirmación.",
                benefit4Title: "Cómodo también en móvil",
                benefit4Desc: "La interfaz mantiene la misma dinámica y es más fácil de usar en pantallas pequeñas.",
                softBadge1: "Más confianza",
                softBadge2: "Decisiones más claras",
                softBadge3: "Experiencia más suave",
                ctaBandTitle: "¿Listo para solicitar atención con confianza?",
                ctaBandText: "Puedes mantener la misma lógica de reserva mientras haces la experiencia más premium, tranquilizadora y orientada a la conversión.",
                ctaBandBtn: "Iniciar reserva",
                faqTitle: "Preguntas frecuentes",
                faq1q: "¿Cómo funciona la reserva?",
                faq1a: "Eliges un servicio, añades la información del cliente, seleccionas el horario, eliges un cuidador y luego confirmas la solicitud.",
                faq2q: "¿Puedo elegir el cuidador yo mismo?",
                faq2a: "Sí. El proceso actual ya permite a las familias consultar a los cuidadores disponibles antes del paso final de pago y confirmación.",
                faq3q: "¿Es el proceso adecuado para familias que usan el teléfono?",
                faq3a: "Sí. El diseño mantiene la misma dinámica y sigue siendo más fácil de leer y usar en pantallas pequeñas.",
                faq4q: "¿Puedo reemplazar más tarde los datos de contacto provisionales?",
                faq4a: "Sí. El teléfono, WhatsApp, el correo y los enlaces sociales pueden cambiarse rápidamente desde un único bloque de configuración en el script.",
                progressService: "Servicio",
                progressInfo: "Info",
                progressSchedule: "Horario",
                progressCaregiver: "Cuidador",
                progressPayment: "Pago",
                progressSummary: "Resumen",
                progressConfirm: "Confirmado"
            },
            de: {
                navHome: "Startseite",
                navServices: "Dienstleistungen",
                navCaregivers: "Pflegepersonen",
                heroTitle: "Einfühlsame Pflege für Ihre geliebten Senioren",
                heroSub: "Professionelle und vertrauenswürdige Pflegepersonen in ganz Marokko.",
                bookBtn: "Pflegeperson buchen",
                urgentBookBtn: "Dringliche Buchung",
                heroStat1Title: "Ausgewählte Pflegepersonen",
                heroStat1Desc: "Profile, die klarer und beruhigender für Familien präsentiert werden.",
                heroStat2Title: "Flexible Buchung",
                heroStat2Desc: "Wähle den Dienst, den Zeitplan und die Pflegeperson ohne Änderung deines Ablaufs.",
                heroStat3Title: "Schnellerer Kontakt",
                heroStat3Desc: "Ein flüssigerer Weg zu WhatsApp, Telefon und Familien-Follow-up.",
                servicesTitle: "Unsere Dienstleistungen",
                servicesIntro: "Klare Unterstützungsoptionen für tägliche Pflege, Arztbesuche, persönliche Hilfe und Gesellschaft.",
                consultTitle: "Brauchen Sie Hilfe bei der Wahl des richtigen Dienstes?",
                consultText: "Starten Sie jetzt den Buchungsprozess und finalisieren Sie die Details per WhatsApp oder Telefon, sobald Ihre Kontaktdaten hinzugefügt wurden.",
                consultBtn: "Buchung starten",
                serviceHome: "Häusliche Pflege",
                serviceHomeDesc: "Tägliche Hilfe, Hygiene, Mahlzeiten und Wohlbefinden",
                serviceMedical: "Medizinische Begleitung",
                serviceMedicalDesc: "Arztbesuche, Medikamentenerinnerungen",
                servicePersonal: "Persönliche Pflege",
                servicePersonalDesc: "Baden, Körperpflege, Anziehunterstützung",
                serviceCompanion: "Gesellschaft",
                serviceCompanionDesc: "Gespräch, Spaziergänge, emotionale Unterstützung",
                meetCaregiversTitle: "Einige Pflegepersonen kennenlernen",
                ageStudent: "21 Jahre • Student • Marokko",
                ageNurse: "35 Jahre • Krankenschwester • Marokko",
                ageAssistant: "28 Jahre • Assistent • Marokko",
                servicesDetailTitle: "Unsere Dienstleistungen im Detail",
                whyChooseUs: "Warum uns wählen?",
                homeWhy1: "Individuelle Pflegepläne",
                homeWhy2: "Freundliche und erfahrene Pflegepersonen",
                homeWhy3: "Verfügbarkeit 24/7",
                serviceHomeDetail: "Unser häuslicher Pflegedienst bietet Unterstützung bei täglichen Aktivitäten wie Baden, Anziehen, Mahlzeitenzubereitung und leichten Hausarbeiten. Wir sorgen dafür, dass sich Ihr Angehöriger in seinem eigenen Zuhause sicher und wohl fühlt.",
                medicalDetail: "Wir begleiten Senioren zu Arztterminen, kümmern uns um Apothekenbesorgungen und stellen sicher, dass Medikamentenpläne eingehalten werden. Unser Personal ist darin geschult, mit Gesundheitsfachkräften zu kommunizieren.",
                medicalWhy1: "Organisation sicherer Transporte",
                medicalWhy2: "Medikamentenerinnerungen",
                medicalWhy3: "Rückmeldung an die Familie",
                personalDetail: "Unterstützung bei Hygiene, Körperpflege und Mobilität. Unsere Pflegepersonen sind darauf geschult, respektvolle und würdevolle Hilfe bei täglichen persönlichen Aufgaben zu leisten.",
                personalWhy1: "Respektvoller und sanfter Ansatz",
                personalWhy2: "Sturzpräventionsmaßnahmen",
                personalWhy3: "Kontinuierliche Betreuung bei Bedarf",
                companionDetail: "Soziale Interaktion, Gespräch, Spaziergänge und emotionale Unterstützung. Wir bekämpfen Einsamkeit und halten Senioren aktiv und glücklich.",
                companionWhy1: "Freundliche, geprüfte Begleiter",
                companionWhy2: "Auf Interessen zugeschnittene Aktivitäten",
                companionWhy3: "Regelmäßige Familien-Updates",
                caregiversListTitle: "Unsere engagierten Pflegepersonen",
                backToCaregivers: "Zurück zu den Pflegepersonen",
                backHome: "Zurück zur Startseite",
                backToServices: "Zurück zu den Dienstleistungen",
                backToService: "Zurück zum Dienst",
                clientInfoTitle: "Erzählen Sie uns von sich",
                firstName: "Vorname *",
                lastName: "Nachname *",
                city: "Stadt",
                phone: "Telefonnummer * (marokkanisches Format)",
                email: "E-Mail-Adresse *",
                continueBtn: "Weiter →",
                selectDateTime: "Datum und Uhrzeit wählen (24h)",
                dateLabel: "Datum (ab heute)",
                selectHours: "Stunden auswählen (Mehrfachklick)",
                noHours: "Keine Stunde ausgewählt",
                confirmChooseCaregiver: "Bestätigen und Pflegeperson wählen",
                editInfo: "Informationen bearbeiten",
                selectCaregiverTitle: "Pflegeperson auswählen",
                backToTimeSlot: "Zurück zur Zeitauswahl",
                paymentMethodTitle: "Zahlungsmethode",
                cashOption: "Bargeld (Zahlung bei Ankunft)",
                cardOption: "Kreditkarte",
                cardNumberPlaceholder: "Kartennummer",
                expiryPlaceholder: "MM/JJ",
                cvvPlaceholder: "CVV",
                confirmBookingBtn: "Buchung bestätigen",
                chooseDifferent: "Andere Pflegeperson wählen",
                confirmationTitle: "Termin erfolgreich geplant!",
                confirmationText: "Wir werden Sie so bald wie möglich kontaktieren, um die Details zu bestätigen.",
                returnHome: "Zurück zur Startseite",
                footerTagline: "Einfühlsame Pflege für Ihre geliebten Senioren.",
                quickLinks: "Schnelllinks",
                contactUs: "Kontakt",
                followUs: "Folgen Sie uns",
                validationRequired: "Dieses Feld ist erforderlich.",
                validationCardNumber: "Die Kartennummer muss genau 16 Ziffern haben.",
                validationExpiry: "Das Ablaufdatum muss im Format MM/JJ vorliegen (z.B. 04/26) und in der Zukunft liegen.",
                validationCvv: "Der CVV muss genau 3 Ziffern haben.",
                validationDate: "Bitte wählen Sie ein Datum.",
                validationHours: "Bitte wählen Sie mindestens eine Stunde.",
                validationPhone: "Bitte geben Sie eine gültige marokkanische Telefonnummer ein (z.B. +2126XXXXXXXX oder 06XXXXXXXX).",
                validationEmail: "Bitte geben Sie eine gültige E-Mail-Adresse mit '@' ein.",
                validationName: "Bitte geben Sie Vor- und Nachname ein.",
                bookThisService: "Diesen Dienst buchen",
                selectServiceTitle: "Dienst auswählen",
                heroNote: "Ein reibungsloseres und beruhigenderes Buchungserlebnis für Familien.",
                trustChip1: "Sorgfältig ausgewählte Pflegepersonen-Profile",
                trustChip2: "Flexible stundenweise Planung",
                trustChip3: "Mehrsprachige Benutzeroberfläche für Familien",
                trustChip4: "Landesweit in Marokko verfügbar",
                howItWorksTitle: "Wie es funktioniert",
                howItWorksSub: "Ein einfacher Prozess, der Familien hilft, die richtige Unterstützung ohne Verwirrung zu buchen.",
                step1Title: "Den richtigen Dienst wählen",
                step1Desc: "Beginnen Sie mit häuslicher Pflege, medizinischer Begleitung, persönlicher Pflege oder Gesellschaft.",
                step2Title: "Daten und Zeitplan eingeben",
                step2Desc: "Datum wählen, Stunden auswählen und notwendige Informationen für die Nachverfolgung eingeben.",
                step3Title: "Überprüfen und bestätigen",
                step3Desc: "Pflegeperson wählen, Zusammenfassung überprüfen und dann die Anfrage in einem letzten beruhigenden Schritt bestätigen.",
                whyFamiliesTitle: "Warum Familien CareVia wählen",
                whyFamiliesSub: "Das Ziel ist nicht nur eine schöne Website, sondern einen klaren, menschlichen und vertrauensvollen Dienst zu bieten.",
                benefit1Title: "Warme und menschliche Präsentation",
                benefit1Desc: "Familien verstehen den Dienst schnell und fühlen, dass die Plattform auf echte Pflegebedürfnisse zugeschnitten ist.",
                benefit2Title: "Klare Buchungsschritte",
                benefit2Desc: "Jeder Schritt ist klar abgegrenzt, was Zögern reduziert und die Buchung erleichtert.",
                benefit3Title: "Beruhigendere Profile",
                benefit3Desc: "Servicekarten und Pflegepersonen-Profile schaffen mehr Klarheit vor der Bestätigung.",
                benefit4Title: "Auch auf Mobilgeräten komfortabel",
                benefit4Desc: "Die Benutzeroberfläche behält die gleiche Dynamik und ist auf kleinen Bildschirmen einfacher zu bedienen.",
                softBadge1: "Mehr Vertrauen",
                softBadge2: "Klarere Entscheidungen",
                softBadge3: "Sanfteres Erlebnis",
                ctaBandTitle: "Bereit, Pflege mit Vertrauen anzufordern?",
                ctaBandText: "Sie können die gleiche Buchungslogik beibehalten und gleichzeitig das Erlebnis hochwertiger, beruhigender und konversionsorientierter gestalten.",
                ctaBandBtn: "Buchung starten",
                faqTitle: "Häufig gestellte Fragen",
                faq1q: "Wie funktioniert die Buchung?",
                faq1a: "Sie wählen einen Dienst, fügen Kundeninformationen hinzu, wählen den Zeitplan, wählen eine Pflegeperson und bestätigen dann die Anfrage.",
                faq2q: "Kann ich die Pflegeperson selbst wählen?",
                faq2a: "Ja. Der aktuelle Prozess ermöglicht es Familien bereits, verfügbare Pflegepersonen vor dem letzten Zahlungs- und Bestätigungsschritt zu prüfen.",
                faq3q: "Ist der Prozess für Familien geeignet, die das Telefon nutzen?",
                faq3a: "Ja. Das Layout behält die gleiche Dynamik und ist auf kleinen Bildschirmen einfacher zu lesen und zu bedienen.",
                faq4q: "Kann ich die vorläufigen Kontaktdaten später ersetzen?",
                faq4a: "Ja. Telefon, WhatsApp, E-Mail und Social-Links können schnell über einen einzigen Konfigurationsblock im Skript geändert werden.",
                progressService: "Dienst",
                progressInfo: "Info",
                progressSchedule: "Zeitplan",
                progressCaregiver: "Pflegeperson",
                progressPayment: "Zahlung",
                progressSummary: "Übersicht",
                progressConfirm: "Bestätigt"
            }
        };

        // Current language
        let currentLang = 'en';

        const CONTACT_CONFIG = {
            phoneDisplay: '+212 679 631 557',
            phoneRaw: '+212679631557',
            email: 'carevia.maroc@gmail.com',
            city: 'Across Morocco',
            whatsappRaw: '212679631557',
            whatsappMessage: 'Hello CareVia, I would like more information about your services.',
            facebook: '#',
            instagram: '#',
            google: '#',
            whatsappDirect: 'https://wa.me/212679631557'
        };

        function hydrateContactInfo() {
            document.querySelectorAll('.footer-col p').forEach(p => {
                if (p.querySelector('.fa-phone')) {
                    p.innerHTML = `<i class="fas fa-phone"></i> <a href="tel:${CONTACT_CONFIG.phoneRaw}" style="color:inherit; text-decoration:none;">${CONTACT_CONFIG.phoneDisplay}</a>`;
                }
                if (p.querySelector('.fa-envelope')) {
                    p.innerHTML = `<i class="fas fa-envelope"></i> <a href="mailto:${CONTACT_CONFIG.email}" style="color:inherit; text-decoration:none;">${CONTACT_CONFIG.email}</a>`;
                }
                if (p.querySelector('.fa-map-marker-alt')) {
                    p.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${CONTACT_CONFIG.city}`;
                }
            });

            document.querySelectorAll('.social-icons a').forEach(a => {
                const icon = a.querySelector('i');
                if (!icon) return;
                if (icon.classList.contains('fa-facebook')) a.href = CONTACT_CONFIG.facebook;
                if (icon.classList.contains('fa-instagram')) a.href = CONTACT_CONFIG.instagram;
                if (icon.classList.contains('fa-whatsapp')) a.href = CONTACT_CONFIG.whatsappDirect === '#'
                    ? `https://wa.me/${CONTACT_CONFIG.whatsappRaw}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessage)}`
                    : CONTACT_CONFIG.whatsappDirect;
                if (icon.classList.contains('fa-google')) a.href = CONTACT_CONFIG.google;
                a.target = '_blank';
                a.rel = 'noopener';
            });

            const whatsappFloat = document.getElementById('whatsappFloat');
            if (whatsappFloat) {
                whatsappFloat.href = CONTACT_CONFIG.whatsappDirect === '#'
                    ? `https://wa.me/${CONTACT_CONFIG.whatsappRaw}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessage)}`
                    : CONTACT_CONFIG.whatsappDirect;
            }
        }

        function initFaq() {
            document.querySelectorAll('.faq-question').forEach(btn => {
                btn.addEventListener('click', () => {
                    const item = btn.closest('.faq-item');
                    if (!item) return;
                    const isActive = item.classList.contains('active');
                    document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
                    if (!isActive) item.classList.add('active');
                });
            });
        }

        function initFloatingActions() {
            const backToTopBtn = document.getElementById('backToTopBtn');
            if (!backToTopBtn) return;
            const toggleVisibility = () => {
                if (window.scrollY > 260) backToTopBtn.classList.add('visible');
                else backToTopBtn.classList.remove('visible');
            };
            window.addEventListener('scroll', toggleVisibility);
            toggleVisibility();
            backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        }


        const AYOUB_IMAGE = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIBQADQAMBIgACEQEDEQH/xAAxAAEBAQEBAQEBAAAAAAAAAAAAAQIDBAUGBwEBAQEBAQAAAAAAAAAAAAAAAAECAwT/2gAMAwEAAhADEAAAAvzYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAKACAoICgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlAAAAAAAAAAAAAAAAAAAgKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKAAAAAAAAAAigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICgAAAAEoAAAAAAAAAAAAAAAAAAAAAAllAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAbMNwy1kKIsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIoAAAAAAIKAACUAABSVSKJENTQ1z0MZ9A5W8zpMDZCyiAAAAAAAAAAAAhQAAAAAAAAAAAAAAAAAAAAAAAAAAQ1WS75jedjlevI3rOTWcwtnM3rNJjrzJWhWjn0xotxDa6ObWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsM3r2PPjrk3m84uuWzWLak2Ob0czF7Qyzk6TGy8fRk4auS6yNTWSbgsaMLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbM9oJ049Tz9LScsyN9uWioNasMuWj0OOC8tbOTt1OG8arWMwllOmOmJIgpF7c1qTUIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB15Unbh0O149RzaOerzjm69Ry74I6cpWGjU6CY7ZOF6k5LKzWDO8i2DpJki5OuQtlNZ1iosAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGshJDpO+jneEOqSOlnYzeZcYnUb69s65a9Nl8vb2WXw8/pj5WPo/OuenHuPJz9PPU4b6ROe+mDjO+KxO/NIzsms6ImTTpioAAAAAAAAAAAAAAAAAAAAAAAAAAAAUS5MdMQ6YzRrWonXnk9F8g6Tfpl4dvperHT5Xs9nbOvPr0JfJfVhcY6yXz+f3Zs+Dz+z59Y8PXcsnLtV5Z7xPPn0c7OXP0Zs87ti5zGLNSw3LCCgAAAAAAAAAAAAAAAAAAAAAAAAAAFmhnfIZB1zuNumZedYsvV9Ca8n1nt59HZvOs56l57tTE6Q4565l5Y64Xjx9XM8j1Zs8075s4OuDGPRmzzZ9WE48vXnU8Pn9/m1jmS51ILLKAAAAAAAAAAAAAAAAAAAAAAAAAAAWaLz7cTOrsmfRmJ0mjOemTt9b5f1cdPT1x15dW+XQ0LKlBKzjeJcZ1mXOd5MzQ5Z6ZOedrOc2sxnoTnasx5/dNZ+Fz9/wA/WLbLAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAz2MdFTWsVbnODrvFj2fV+Z9Ln19O5OfS7zTozqwKSyJm5WY1iVjeSZ3gzNQ5zebMyyyS5LZq53K1nz/A/S/A1nFubkKAAAAAAAAAAAAAAAAAAAAAAAAAAAAdePUBNM6Lz6815d+Htj1/U+X9Tn17a59OfRZV3rl0spLCWM53FxnpmMTeFxN4JKrON5TE1myTUJS50l1L8v6nkufjzWd4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAazss1BQ3x6do8/f0c867fV+R9PHT0dcbx0WaGs6stmky1axNwxnpiXON4M51FzLExnpizC0xNZosZtXUvHvzs+BjeNcwoAAAAAAAAAAAAAAAAAAAAAAAAAAABrNOrl1Gr1hN5l9fn9HPOuvt8/rx07byxvVmhub1GoubM4rc5DeOeDpnniXtOWjUzC5uRGKszGda5WzrrluzpzSvz+d41zCgJQAAAAAAAAAAAAAAAAAAAAAAAAAAGi9uXeOm+XaXNvSXWms69Hrzvn1VZWppN3HPpnp5+Xl1n0583FPTz8PCz6efm5PqdfldJfp78PWX1ue5q5vMucc7N8ufC59OPHz1n6fX5PoT3zy9DxcfR57AoAAAAAAAAAAAAAAAAAAAAAAAAAAAADt049o7d+XbOm50lz0zua+hV5dZVGdebWZjXbefFx+j508HP2cTycfZzTza62uOu1jn359Tv2z6Zrjx9fmXhx9Xn1jycfWs8WvTk5dN9R3vsT4/i+h8/WQoAAAAAAAAAAAAAAAAAAAAAAAAAAABb9fN+V1+35prz9LvN6mjO8dl9mpvl0iysculszi+et+TPBJz+l3s+Rn6nlXxXrxuel5dZevp83vl6d3oXy+T6PjTl5/Z8feM8OWbOu3WXHonQ79/H6D5vi6c98woAAAAAAAAAAAAAAAAAAAAAAAAAAAWPt9L8zj6/p/S+V6pPSx6o+Zy+l8/fPPo5909O86x0TUOfPrxOXk9Hls831fD4dZ+v83hz3jLz+mzrn6vkl5dPP6c79X0MejOt9+PeXPi+j5E8f539H+f3jz2Y6c93ntO/T2euXzY+f65r5w3gAAAAAAAAAAAAAAAAAAAAAAAAAAAB249o+1y9HHh7Pra12Y+d09nkNeTtmPP6eXo1nrrNzvQTHL0Zs8Pn+kr5e/oeWyfC+7nWfgev3cDv5HOW+nze5fZ6M9cXXSVd+fvzs8PyPteU/P63jpzxros93TyfRPLfVzj4I3gAAAAAAAAAAAAAAAAAAAAAAAAAAABYj9HOHs4+v6J83M9XyuWa+zcd5PP359Desal1ZqxbbnE6K4+b24Pl8fq8V+Xw+tzr5nb16Tn7p6zHS3Oqqzeas8HL08JfleL7fzd8/Lrv1Me7n6Rw9PnPzw3zCgAAABCgAAAAAAAAAAAAAAAAAAAAAA9/3vyv6vl27fJ+r83HXzfR4/WuePSbjyali7xZemsbs1vn0ubNTUyuTHPpymufLriXl031rfXntFiNJa1TU8/l9fkzefl9Od4+frrzTv6PL6DfH0ec/ODfMKAAAAAAAAAAAAAAAAAAAAAAAAAAAAfpPzf0s6+7h34enx/S47szn08U5SxLYl6a4dzesas2xbLi4HPUmubVG87prJNMal1rO7NU1nzeX0ebOsSt54c+uGc98dTp5fT4j4Q3zCgAAAAAAAAAAAAAAAAAAAAAAAAAAAGso/X4+Z93j6cd8SJNWXhN4uVJXTns6XFstwNZAlWKq3ImYjXfz+mlzwT058Ga7cOXmPX6fl+nWEm0ugfP93y7PnDeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN/qvyXbOv2c83p498a1THn6cipqS2VdJqoQpQtqJpJz6YXF6I4dL5KfI7dbPD6PT57nnjp6TxezPazPo4d0s1knw/t/nrMDeAAAAAAAAAAAAAAAAAAAABCgAAAAAAAASw9X6L8n0xv9hz+fy59u0+Xu5+/vnvN2llWDSWmhLndqFMtDNsBTnz78rPN8/6HzDHu8Xo1nqks1157jed4PP8AA+v8jWQ1kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYj9Bc+jj6PFz+iOm+PSOus7MNYXeuejWsU3cbSWaoQSQszzN8pzOXzfb4NZ7XtzS9fM1n3dPL6lvPfOX5Ph68t8goAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD7nu8H0OHo1XTN8utcrPRvjTpM01cjdzV3cQ1vntHB5rPRfN6ltz4z28fBxa+h5eSz6Hm83G59uvB3ueu+nC59fn7fOl+WN8woAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeo+n7/P6OHfXTnrOteL3+azGuds3vnqXrM6GoNsl1JDHl38q59U+f106Z69V83L2cLcctcbnobjN9vC45+3we89HxfrfAZDeQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANfuPyv7hPmeb73h59fBua59amo8Lrw1npvns1cJel5jq5jfK81xjvtLjtztxrnNa9HPnCc7xOmMrPXnG7xvLrzjx/N7cd4CwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlADfaz7n6Twe80mpeHz/rzOviz2ePl1eT1ZmvLvm1js57zq3NEZKwrpvjY7uUXXPPCvRjxcNT2c/Cs9e/D6GfZ18/U6cO3z7PAN8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFnVOuo64/XfQ/A/bxr9LeXXNBXl9SPiY+18zn28fl9fHOufXz7ue7Gs6stMZ65rjOmEzLinHeE48fYs8WvTDl09EsvS9CfC+t8XWQ1kAAAAAAAAAAAAAAAAABKAAAAAAAAAAAAHp5d95g1kF9P6b8jI/oT8p+lxrsllZo+d8v8ASebG/wA9y9vkxu78yvbvz9s66XOok6U449GTz3urz8PVwPJN8tZ9vXz+q5luD5Xh1nfMKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHROmq65hEqCoW9uA/Y/R/nv3sX9JM6zUDn8T73Oa/KcvufH59Mevx4PqdPD6M69OuG5ekxk3iYVwvC554NZ9Pp8XevR4vV8S54jeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHox13mpdZzLCENXNVYBD6H6z8H3y/dPH686ksjHi92F/M+f9L8PG/B6OWM6+j0+Z0PovnpfbjyYs9PHhzTs5ar09vJhOvzzeAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdUvRjpnbNsubCZ1gu+dXclLAQOn6r8hY/fPj/XxqZ1k58O2D43zv03hxv42evPOs53EzOm64z6HzrJOa5sAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHVL0OmQs5zrzNTnosRSSNawOjNoBnUh+k/Nj95Ph/ZxpjcOXPtg83xf0PPOvzufZ58b59p3X0/L97WPhpdZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAigVNd5rpmUslkLjWTOOm15NYI1mKgusU1c2rAk1mN/f/PD9vfkfWxqY6ZOeemTHxvtzOvh9NcufSe35v09Z/Nz1eXWAoAACKAAAAAAAJQAAAAAAAAAAAAAAAAAAenPTeUs1kBEEtFsJz65ON1zlrUE1BYNRUgIuV3+k/M9I/ZX5/uzrWdDm6SXh+e/T/IzfD7vD7ZfJ8r9H+b3mgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdp21kN5SwQCQvSUkoksJjpk47vOXolJNCWAsGbBUO/6T8p6o/V683fOts2Gdl+J1+j86X2/kf1HyLn5YUAAAAAAAAAAAAAAAAAAAAAAAAAAAB1nfWRd5hAgSwWdBLAQSwiwmOkOO3OXpfNY9M46rpM0sCLBYPo/oPx/wBiX7Wsazd3G4fm/wBJ+aPJ9Py+iviztxgFAAAAAAAAAAAAAAAAAAAAAAAAAAbz6dZpd5hBLCAGhdKgJKiSwQEBnUOeeqXjnvmOHfPQy1mtSUiwtyP0f0fyH6jN9Opc3y/B9PlHXNr53P0eQ2sgFAAAAAAAAAAAAAAAAAAAAAAAAJ3TejrhQSqzNZhAdFqLCLIQECAgCBncXEZh249jJCVCgTUHr8g/ZY+Kxr5vo8faX1783YfI+18uzF59AJQAAAAEoAAAAAAAAAAAAAAAAAA33zvphZbAEKk0jLSrAWUiSKyKQILAiwBZy7I5dOUOslLKICpSLAmozvGsb69vP0PT599K+Pq4TtCAUAAAAAAAAAAAAAAAAAAAAABvHpstl6YtirmaJoBCoCCoEIyCLBAWAQAqUceyPN0c5ru57ssolgpTFQ1KzeuufaXn06aj5fP6Hz61vls0IBQAAAAAAAAAAAAAAAAAAAAN98b3ijUuG6WQ1JktzSxktiECsUslCC50MkKgqUXKLcjWNWuDryzemuHWjWRrNEsFkNbzrGu/XzdzXx/s/LOVzTqzoCUAAAAAAAAAAAAAAAAAAABZ1TpTri5aqmQiEolQoCUkQhC2AQqDWVMrIqCoLLC3I3JTjPRxl3ePWlCyjMsL147jvvnvOt8O2j491iNdOWq2IBQAAAAAAAAAAAAAAAAAAHo5dt5sN5tQJSAJSFglEZECW0zdQk1kkuSso3JoiVRCgSxLc1dyExjvzXWuHUtlJNQzqDr08/bN69/P6F+f4/q/Mylza6sdCCUAAAAAAAAAAAAAAAAAAVO2peuGoqwIsCwQgUgJKM26CiTWCS5JLkEi3I3BbAWCyiAqDVzTHPvzjeuHaqCZ1CdOdj1ejyeia1876flj5tuY1vnqtrIBQCCgAAJQAAAAAAAAAABvHazdzvriGTTIqCoLGY0yNJDSDVxTTMLm5JlmLELBVkjWsUus0CrFIABYNA5OvCPQ59azNQko16/F3j2c9pfl8Pf4c1c2urHRIJoAAAAAAAAAAAAAAAAB6OPbeaN5ZQMo1cjSQSUtUjQi0lok1gzi5JLJQAAhYNACrc6EsAJULYNZtPP3xjN9MNSSwmoj39PH7V4fM+v87N81li9OerNLJQUAAAAAAAAAAAAAAAQ69c6682bKZIl0MXUGd4JvPQaKAAGYcrzEM0UirIslEKgus0WC3NNQsSiLFoKC8O+Yx38noNTWaiw17vn+iPV5/RvOvh57cYus2uiVAmgAAAAAAAAAAAAAAFmk66ze2GdDNaAIozNBqCgsAZHNzhkzWpoUsksEslQAlqWyzXM2g2lpKECkNQKE5478M69GvP31JNZJqD3+35nvzfmeL7fxs3GsaNdOXTUDNBQAAAAAAAAAAAAAHTn21nQ6ZoQAFsEAoUBGRhzhkzVaLqXUkoksiSyWBRIoLLBc01c2y2WooQFg0lGdDz98YzfVk1JKNe/53qj6v579D8jOvnLmN657s6S5WiUAAAAAAAAAAAAAQvbl13jUs3mpVtzSxBYLYALGRiYhkzRoaasLKZsGbIQlSiTUWVI1c6s52WW3Oi3OrAqwBC6zSgcO+Inby+hbNZsdOY+xz5ezGvz/AD9XlhrOq6M7TNJoAAAAAAAAAAAABKNbxvpjUs1kkl2zosspVEoGS8mIZTNpS1qylpLCS5GbJRIEW2AsiagyuZdXNs1c2zSCikshZS3NqoOc68M31Zz01MzWTv8AV+L9TN8nzfs/JzcXOqvTl0sDOgAAAAAAAAAAAAANdMa6c9RNQqVQFspCxFYc4uEzaaJq2wWqBLkkuYQlSiBQipaiiY3zytlW3OrLYs0gssALc2qBjY4+jz7zekrUe3w9493zPpeHOvDZS7xqzSzNBQAAAAAAAAAAAANbxrpz0XRZUSgAuRiYlZkzbZqW7l1kKWaCiZuCRM2pQQCUgoKlpy7cYoltg1c2zSWwAAC3NKKxz7cc3ux0smsq+n5ekxr5diNWLOsFCUAAAAU9L6o+AsAAAAAALrF3jrc63kQ1FJUVzvKLhMaGh0m9ZSykUupRLkmLiCM6tiywEJQAKg1y6YJZZVlLc2zSWygSwoFg1CmNyOXfz9Jeg1O/fx+3N+TNZzbZa6JUCaAAAA9X1flfVPQDz/K+r8o8oAAAAAEs1ntrN3ms00SxhzlYZxqpqG29yaSxAtUagmLiJm5mqli0sSwglAAAuN4iBaC2Etlq3NssACgWUTUrlOnLF73nvUvr8foPLy9HmxrQresbsDOgAAAFg+++UPNAAAAAAAZ1NZ7STeZ049TeHMYZxbCau89NZaNQAaFBGCYuc1CW2Wy0skslglWCgSiZ3iIFoFlKlstgosAAoKKcO/PNz24dTXTnbN+P2+LGrZavTn0sDOgAAAAAAAAAAAAAudZud5deeiYZlQzpqbsu5d5LAC6lE1knPWImbM6CLqa1CrMy5lCUlKgtzonPrygJaKAtgtlsWCpaBFgtlGdDhpnGu7Ot56eP1ebOliL057s0JQUAAAAAAAD/xAAC/9oADAMBAAIAAwAAACEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIAAIAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAABDygAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAIAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAwAAAAwAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAIAAAAADCAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAABAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAQgAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQTjTjwQwAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAwAACAAQiQSRDARDDhAwQAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAASCRATCSDShhiCyiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARDjRZaCjiBzBDBTSjCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATwyzgoYaY46rqQjy/spwgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASQAAiokn5ZJbe2YqooKJaSAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwBAzLZgjA6LEN+SFFQUJaagAAAAAAAAAAAAAAAAAAAAAAAAAAABQwhRvbaMvvdbjzY9wo6atSTIgAAAAAAAAAAAAAAAAAAAAAAAAAACiyy34SQe0As+cF2h0JX5DjTwAAAAAAAAAAAAAAAAAAAAAAAAAAAShRRphUmsoduSDUWnrjkt+N5agAAAAAAAAAAAAAAAAAAAAAAAAAAAARGiymyWX9zOwaVYbxz7Pty4AAAAAAAAAAAAAAAAAAAAAAAAABAADSn0yHEfxyEvweLZgqTKOS3wAAAAAAAAAAAAAAAAAAAAAAAAAAAACjQhEoKjgSLnETWA+XowcgFYAAAAAAAAAAAAAAAAAAAAAAAAAAAABBzXFZ2fKAMIqrca0mSPP8zYACAAAAAAAAAAAAAAAAAAAAAAAAAABAo0av8HNSn9lYZ/HEj4D/AHGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU7lKEKOBqXTXJDr/AJgZJGkwwAAAAAAAAAAAAAAAAAAAAAAAAAAAABtj8nIzS1S33j+y+D+RahkSwAAAAAAAAAAAAAAAAAAAAAAAAAAABlHouR4UFrw8np4LmEtwUemQAAAAAAAAAAAAAAAAAAAAAAAAAAAAETr4/wAESbEHpYo6gNUrMxSC0AAAAAAAAAAAAAAAAAAAAAAAAAAAAALCNt+NbqfouPAt3Tka9fdscIAAAAAQAAAAAAAAAAAAAAAAAAAAAACEhPAqbr90kJbQu8VRcz8PcIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGLLKWF1DJFakz/ovI2iffaIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIqUb2JUk8c7wr+RuiimPNkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWtlzdJgSZx/SOUu94UaNoAAAAAAAAAAAAAAAAAAAAAQAAAAAAAABS4C1z7ZR9FYy1HnboU8eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAajr5GCDyPACZSZmdVDqEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzqqjU2AznFo3wyl60MIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbpk1ZmgzAMAIynbsi8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0zFJqEIVnQI3S3fxMeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAQhqjHY84sM1OV1nyMZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbFIfwPwWJvsS/ltcpcdgAAAAAAAAAAAAAAAAAABAAAAAAAAAAAADD0wwQhgDvDi0l+1H2sekAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPCFWxxxtvZZW6Mv6PNTUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQm3WSywWGMYX5m4n/AckAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe600WBxCzz602YlPHmmIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAd6OGFQ6YjhKS5s0RqwwgAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAViOXVDyIy6BhYCL1kEtoIAAADAAAAAAACAAAAAAAAAAAAAAAAAAC5fs3HsX6RJZuOKPoXJV+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpPck0vO3Xr7qLIqZvH9K5MAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9suvWPefOHFglkgLQpyEvMyYAAAAAAAAAAAAAAAAAAAAAAAAAAAlP8AzLnxB7DLZFiHryC+cVD/ALegQAAAAAAAAAAAAAAAAAAAAAAAAD1d7U+8QQ3w46TcDrrrltteCHmVAAAAAAEAAAAAAAAAAAAAAAAAAGRyzYrHaLzw7SccOqEhmigu8rLFAwAAAAAAAAAAAAAAAAAAAAAAEjzWbJCGGCj/AN2GXl0tw6oYKTIX9BwkAAAAAAAAAAAAAAAAAAAAAAN9gQTASb4stHGkEk8P0uiKa4SJm0kQAAAAAAAAAAAAAAAAAAAAALNQSrqaoqoW8XnHN89f8ufipKz/AAivMJAAAAAAAAAAAAAAAAAAAAUcUo4I7KvDj3nBPDaW2T6XllKigaEXMCAAAAAAAAAAAAAAAAAAABFMI0w7qLvbSnnlDFwckyCem/luavkqnaDAAMAAAIAAAAAAAAAAAWIMI4MW+GTPv+PVYm2qAaoA2iFy+YpvTNLAAAAAAAAAAAAAAAAAAMwI+2Cw++KGKxU88yum0IUAk0y6mKyYV7zBAAAAAAAAAAAAAAAAElYe+meqks8y9CaxyGN2CafR0A4C5mALi5knAAAAAAAAAAAAAAAAHsQ4I8kMEcg57uDfCZyZleQwcEU3asmwjLL9JAAAAAAAAAAAAAAAR0Nb4ZVCA017zB5DGsGCmqWgwckCsmWYrQtbMAAAAAAAAAAAAAAEpFQKQks+It67bRdbKTUuJx668IMgyPoWsmH4DgAAAAAAAAAAAAAQcdOSQ0wod+VfJhVcH0kmiqFd+gWqMIWQ0rPIJAAAAAAAAAAAAAAAnNqCFFYkRBz5V1jaRgyYoP44nOWWMwsm4dI85jAAAAAAAAAAAAAAVQpJB1ItCH55xFuLHiMSYVUmOb/LTuA+TcQvHIAAAAAAwAAAAAAAiJ1dgcC5jRZlhFqtZLx1N5ooNZjXDCc3sIRb4DAAAAAoAUAAAAAA6qGBsuLgl9RlvUfmKpVt9X90nyNf/D2w7vZHUdAAAAAAMAAAAAAAQIsG/GJ8gABt+9FhKDkSejVQqZGx59XkahqfohAAAAAAAAAAAAAAHe+JAoEw8Gw5RXiTtBJNqzXE8mouIhtyzCeYH/BAAAAAAAAM/8QAAv/aAAwDAQACAAMAAAAQAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8IAAEMMoAAAAAAAUoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8+KAQywyAAAAAAAAAAQgAAAAAAAwAAAAAAAAAgAAAAAAAAAAAAAA8w+AAAMMA8sAAAAAAAEAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAA8AyAAA88sAAEMIAEoAEIAAAAEMAAM8oAMIAAAMMAEMIAAIAIAAAA8MAAAA888gk88sAAMM8oMsIAcgA0w88U4AAAA088888AAAgAgAAA88qAAE88oAAkAUAAwgU4gAAU8oAA088IAAAAAAw8804EIAAAAAAE88qAAQ888sAQM4AAgE8gAAAA88oAc88oAAAAAAAQw8gAgAAAAAAU88qAAAA888gA8IAAAU8AAAAA888A88wgAAAIAAAAAAAAAAAAAAAU88uAEsMAAAA8888oAAAAA8IA88sA8cAAAgAAAAAAAAIAAAAAAAAU88oAU88sIAAQ8woAAAAAAAAA88884gAMAAAAAAAE8AE8AAAAAAAQ88oAAUE8wMAE8wAAAAAAIAAAAwQ0gAE80MMAAAMIAAA8AAAAAAAA8+AAAU88MME88MIAAAAAAAIAAAsoAAAww88AAc8AAAAAAAAAAAAE8+AAAAAAww84AwAAAMAAAA8AAU88oAAAAAAAAQ0gAAAAIAAAAAAE8+AAAAAAgAwAAwAAAAwAAUoAAQwgAAAAQoAAAAAEAAA8sAAAAAAQ8+gAAAAAQAAoAAAAAAAAAEMIAAAAAAAoAAAAAAAAAAAAgAAAAAAQ88gAAAAAAAAAAAAAAAAAE88s8AU88AIEIAAEAAAIAAAAAAAAAAAA8AAAAAAAQgAAAAAAAAAU8888oAAM88s8oAAAAAAwAAAAAMAAAAAA8AiAAAAAAAAAAAAAAAAU8w40oAQ888cYgEMMAAAAAAAAA8AAAAAA8AAAAAAAAAAAAAAAAAAAAA88kY0M4kMwAI88IAAAAAAAAgAAAAAA8AAAAAAAAwAAAAAAMAAAgAw0MAYccU0QwUgYoAAAAAAAAA4AAAAA8AAAAAAAAAMIAAAAAAAAEUcIc8woMcos0MEwoAAAAAAAAAAAAAAA8AAAAAAAc4wgAAAEMAE8kgwaOMkUo4wYU0AEI0IAAAAAAAAAAAAE8AAAAAAAwAAAAAAE888c0cgmaH/SOimkg0nPi4QIAAAAAAAAAAAA8AAAAAAAAAAAAAA08ooAkAqSC1axBjImmGiWa8oIAAAAAAAAAAAE8AAAAAAAAAAAAAAU8MggQSckQGSaOX6aHyQihJ9cAAAAAAAAAAAA8AAAAAAAAAAAAAAQs4QsY1tRciXc7TjEeH5osvnbAAAAAAAAAAAE8AAAAAAAU84AAAAMEUQcpzNZ3KlzrkGvFGUvUezLcAAAAAAAAAAQ8AAAAAAAAAAAAAA4UI4Y7ECov+GN5dVIsjwbWu62QAAAAAAAAAAA8AAAAAAAAAAAAAE4wURUAmfXHflWv5aZdzfQfVJGoAAAAAAAAAAA8AAAAAAAAAAAAAE4QYt3QFiQyv0r6XijoQXWnSPYsAAAAAAAAAAA8AAAAAAAAAAAAAAAI8yEu246i9rCQycSI9pQGzkLoAAAAAAAAAAA8MAAAAAAAAAAAAAAAwE7mXu1LAC2S9YbvyUDmCZDgAgAAAAAAAAA8AAAAAAAAAAAAAAQgQHL1QwxrVF2O1bUSttZR617gAAAAAAAAAAA8AAAAAAAAAAAAAAAAwQ2B8S5zhvSrdzTyQF9usZwAAAAAAAAAAAA8AAAAAAAAAAAAAAAcj1JGR/EJab30kC+qJdwiN2AAAAAAQgAAAAA8AAAAAAAAAAAAAAA7k30onBHXGbFcQfCQvcsFDYgAAAAAAAAAAAA8AAAAAAAAAAAAAAArHYcy5cmh9HaQkOTs9KiUE5AAAAAAAAAAAAA8AAAAAAAAAAAAAAAzpXWsEj2nINMC9x+1N/hJtWiAAAAAEAAAAAA8AAAAAAAAAAAAAAAAutV0hPwW0lsuMMP6EIr1JQqAAAAAAAAAAAA8AAAAAAAAAAAAAAAAlpxPK9aC1fAb59P5FxIoZJeAAAAAAgAAAAA8AAAAAAAAAAAAAAAAT82DnoqptvO/91D9ktROSlAAAAAAAAAAAAA8AAAAAAAAAAAAAAAAAMGW06FJyWkdN89LwA6juyAAAAAAAAAAAAA8AAAAAAAEAAAAAAAAAUPr2WJHqjidDH3PYcgPnBAAAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAbs8WhEqmWxDN/sQ31QcDAAAAAAAAAAAAA8AAAAAAAAAAAAAAAcgAowb/G2JU8r7Ij2Gq6pl28AAAAAAAAAAAA8AAAAAAAAAAAAAAE4AA4JnLommzwCo/PiICUUn0oAAAAAAAAAAAA8AAAAAAAAAAAAAAQAAAKj8z/3dyreXjsL7+zOagAAAAAAAAAAAAA8AAAAAAAAAAAAAAAIASlYWtpxvASc1C+R6XY8wAAAAAAAAAAAAAA0AAAAAAAAAAAAAAAAHdfZCOoKDuJ13ejVbAJDAAAAAAAAAAAAAAAUAAAQAAAAAAAAAAAAA7mF0KSjpl0D3/WDdKELAAAAAAAAAAAAAAA8AAAAAAAAAAAEIAEow3fesbdtEptF1lo+1OGAAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAQdrz5ImICkjtsIWSFLHHjAEIAAAAAAAAAAAAA8AAAAAAAAAAAAAAC23TFkeAc5pwK+kGwsjCAAQAAAAAAAAAAAAAA8AAAAAAAAAAAAAWu9hh4eeAMOUW+bigQbIAAAAAAAAAAAAAAAAAA8AAAAAAAAAAAwDT1vXswwHusU2Zei9C8AuAAAAwAAAAAAAgAAAAA8AAAAAAAAAAAEA9J33lnAWcwbvpa3W+bD0AAAAAAAAAAAAAAAAAAUAAAAAAAAAAAXMk/mZ5Xn0G4MG1wdSnQQcIAAAAAAAAAAAAAAAAAEAAAAAAAAAAAg9tbxbrJHHntEXFOlMY/P1nAAAAAAMAAAIAAAIAAcAAAAAAAAAVRdtgwYY681PBYHtUZ2G/3lOsDAAAAAAAAAAAAAAAA8AAAAAAAAaHGQWqQ0OS7pvr2FwGAMZQ/mYOzIAAAAAQAAAAAAAAA0AAAAAAAAQoG4fZUJSs3XN3iiPEoA5h5c2Q1GAAAAAAAAAAAAAAA0AAAAAAAY8AEBKDrVr8ICHTl5jMU4s7lBBblTBAAAAAAAAAAAAAAUAAAAAAA2e9/BhJjRYQCyQ1xvndIN2odV2ZQM18AAAAAAAAAAAAAUAAAAAAX8R3fTvjndyg2qFDjvjDH2hQ2bBHlOCLAAAAAAAAAAAAAUAAAAAAgN7lFpCz2AokQOP/oIQF0fEA+IBD1mBIAAAAAAAAAAAAA8AAAAADJueRlGf2uAPgkgF/i+yI4Uo68iFm+7cShAAMAAAIAAAAAUAAAAAQQ2ktBT/wB5qhscx2N+w8qCk6RO+Mke0YLHQAAAAAAAAAAAFAAAAAIHnHYSWwdz7y8ADCL/AGOiIILdpyYbz7lS4+MAAAAAAAAAABQAAAARnQaKWX2Isl8yM72bXrXUbHvfYZevTbKYaqUAAAAAAAAAAAAAAAALjjCYrC7o+Uza8wFY+58eV554J58a9yCK2ooEAAAAAAAAAAQAAAAMAM1YN8DpmCQIiE+pjPHYbvrYOrhLEa50Ed+0AAAAAAAAABQAAASvtKAoaLSGj9DITFlbj1UFkr/BTWwAFhCLIA/OAAAAAAAAAAAAABD2Et9BpbRx15lhwEAzWwa25kQM0vu55FraT5m4AAAAAAAAAAQAAACV2ZYF8ikwYFwYxEEIg6Si/PvwvemG6n3uM3lYAABCgAAAAAQAAACfh/seOmm4qj74jowRpfHQSNq4DABBIAnyQ8b9IABCAARwgBQAAABtmkPLVhYFYBYoM5YZQ5pZTnP5VDRC9UR2zMyYcAAAADQCgBQAAAAeJpVvIPaQiapqwyXVK57qNRse2MDACtCOT2TeAAAAABDCABwAAACECki8y6e9NIb0JnfWgOX3PyfhQI+b5jnBCVTFAAAAAAAAABwwAAAHe834M3NOUdfw8WA774LkPRPMCPbh26kAOXG6IsQwwwwwxzD/xAAsEQACAgEEAQMEAQQDAAAAAAAAAQIRAxAgITESQEFQBCIwMhMUI1FxQoCQ/9oACAECAQE/AP8Arav/AFXvW/j/ACGXzyWeRYpCkX8a3Q5jyoeY/qEQyqSdCbIzaXI8gpikX8L5FlkppE8/JLNZ5MbdFkJtEc6rkc7FMUxTFMUxaL4BsWk50Zctl2UJDQ0tFJimKQpCkKbISZCWi+AaKHwfUPgb5IlaseqYrEIgxMg7Ql8FIzjuxC1Y9i1iLoxPtC+CkZyXYiLHo0VqkIQhCIcSF8C2OVszdjYiIuSiitEtFohERdoXXwDY2NmaXZYiKIRPA8BwPA8aKEhIURRFFlC6Xr26RJjZN8GSVvSKMcOCMChQR4IeNDhQ0JCRGJGBRRHr18uiT4Gyb+1kuxIxR5FJI/kR/KxZZDyMWVjkmhsTIo8kj+Rn8jFNkevXTzQh2z+qxS4s/ljbV6ZP1H2Ig6R5MVnSFJnDGiXBF2eVNEehQ92MbEyK4XrXwmTk8mSUmxpHuYsl8E3wx6IiQjKfXRjwwT+5ko410iagSVEmqZB/cTXTMErQkhpEoxHH7l67J+kv9EOpEVZkj00JtSTJzvRaRFl8aFmix5V7DmNtmRkVySVxMEqZ5MWRjnaE/uXrnymNeGScS2RTl2SH0IRFCQ0JCaPJEpFciSFzEgqlsXaF676uFTUjjyF+jorgaEIhoiTPITYh9iIrgupCdrVC69d9TDyxsaIN1THFVaYlwMREUhs7KEN0dsSEvsH+xj5iPRdoXXrmrRlxuORobExEhaJ6JIrRsikXR5SoULIccaw/ZfAZ8XmrXZKL8mhx0YhaLREihEPFdobi+kRi2Ja4lcvgc2CMuV2OFvsWJeD/AMj0Wi0WqFRFWyOzCuL+BfTJupsWRktl0RZYhrTyogxTXlpQyCqK+CzL+5LRcxKGtbEIvRRbFGSIQbdsXGiVzXwedf3HpB80UPVoRFeTFij/AJFCKEoiUdFGySS6MK5v4JdH1P0zdyiNNPlaRqSGq2JHnRHKxTstsVkbLSQ2Y1UfgYYpSVjQzN9PDJ/sy4pY3yiEvFlKSJKtaHEUWRiyMZCjIprSCuS+Bxx8pIpVRPC1yh6ThGapozfSuPMeiE3F0yUVJWhqtExNCoVCkkKeuFdv4H6eFK9Z4lIljcdc30sZcx7F5QdMcVMlBp6JibPMTELrSCqK+AhHykkRVJLY0mTw1yitMmKM0SxyxstS7Jwo8ShJkYiRZjXlL4HBjpW988afQ1WkoqRlwNcxE/ZoeNPo/iYsYsbFEUGyEPFfAQg5vgjHxilsT2TgpEo09HFGXBfKKadMTFIhcmeCEvgMcHOVEIKKpa3uZKKkhxrRoyY1JDTTpjZhfHwKTbpGKChHZV6PRPZJKQ009KMuOyVp0YxfAYMXire5jK3SjaGmhjMmO+SC+AwYf+Uvw9b5xselWeNMSteuwYb+6W1bpfahZYiyQ/yeS2ZYe61StjVO0Tj7r1mDF5O31urczwi/YeKJDHUtjJxrRMTs46GqfqscHOVEUoqkIrVfhbI7Wk1RNeOiYx/cvVYoKMdtave1Z5eJd7ZxUkNVomJ0yap36jBDylZQvzySkipQYpJ7GZIXyhIrkZ2q9Rhj4wQtb33vqyUXF2iMk9WMnFp6PpMTJq+fTY4+U0hIXob0lBrlEZXqyStFUyriIT9hqn6X6eHFi3v80o+6Iyvh6MZkj7iJdiJLyjfpEraRCNJL8NbHpf4Jx90Rla0ejVSJoRFklT9HgjcyOl/gvRuhvSyxb5JxdojK1rNWNXE6ETXlG/R/TR4vRvZZWtDGxvetrpibhKvY7Ho1TJqmJkSSpv0WGNRQ9KKGJbLGyytliE9842jHP2YyiSsyLRMyq1focauaRHStlbJSolKxIoYxvREuGhbVpki4yUkQl5Iek0NEWdxa9D9NG5N7FtsbJOyK1Yx6y6ExPc1aE3CVFprSa4JI6ZB8oyKpeg+mVRv8DY2OViViWrerWi5ExMT1sWmSNoxS4rR9E0MiZOYp+gw8QjrexskyUiKEtktjQuyXEhMT2J6zXjK0RdrTIhiO4tegxfrHStjY5Ep2RjYo1sb2oaJ9iExPYnpKKkjG6dPSatHsIiSVSf58X6x/1tbJSJzsgrYlWxjer1TMntomJ7VplVNSRF2tJKmxETKub/PilxFC2SlRObZFWRVbZMvkQx7J9IWiYnumrVGOVOtMqF2Iy/qn+fG/tgxMvSTMk7ErZCFbWyTEJD2z6FohPatJrxnZF2iauJ7iJcw/Pi5ixPgi+SUic9McNtk5DdsiLoeyifQtULZemVWrMUvYfKZLh6LmLX58D+5ovgXCbMk9IRtiVLbOVDkIitJbEzILVaJll6vlHMZkXaMqqQiHZL9n+L//xAAsEQACAgEDAwQCAgIDAQAAAAAAAQIRAxAhMRIgQAQwQVATIjJxFFEFM2Gg/9oACAEDAQE/AP8A49ul0JFKtjpbOg6TpHF/W/BGLbFjFgk/gXpz/GZPC4SV8HTEljt7H4qHjZ0Mr6XpesMTkQ9LsiOBIUUJKxInjUiXpt9mLFQ8Y8Y8Y8ZLGNfRJD/vTFj6mYsXScFjYmJiHFMcBxOkcRwROBkh9Ij0y3ESXZEWtDGMkiSsyLpk/o48nphcaPVC7JD0kMzx4f0cOTAiPGklqmXq2PWQzKrh9ElYoUj0/CFwMlpZYmIZY9GSGS/ix8/QJCW6EjBDZFDJMnI6jqIzR1o6y9G6JTHMckWmmPl+euSIkQW5iVIZInLcnM6yWVn5WRyyI5CMhslInOiWQ6mKbHy/PhyJbiRiX7IjwNk3sOLZ+Jn4R4YCwxHhFBpkUMmxwlI/Ej8UR40iS387FgyZP4o/ws8d6HhlSdFNGL+WrKQ6Kt8jjGuThkXZGKZJUVcSezHPekLf5KHwTdyfmpW0jBhhjwRVfA+SXHBlx1uiC3R8LVk5xgtzLnnX6qiEskuWY+u+SNsVomv1sx7nqY1uSbE5f7ISnZ1fo787F/2Q/sq4RJtqQp2SScWiEKZQxMckPEpj9NJPY/A/kWJEUkRQ+CNKRngpQOiI8SFBRa2JL9X5ydNMwZFkwQlfwKKk3ZKMILY4FyMY2WQlQ5WPc6WJbl7Fm6nZN3AfOlEv4vz/APjctwljZj4MjakiTfWJ7nwSJlnJFHSUNC0k9zmJJU9ZcPz/AEWTozL/AEzh9S3RkcZbott7ofInaJDQ4kYi2PgbKbFElQ2+sjwZudZ7RfnptNM9PmU8MXZSbHdE0RGUNCrSxo4GynI/HGyU0jJ+24tMrrG/oPTZ3jlT4ZFrpTG2STpNi7bHZE6hUzKpVUXRUlyxumSkqpa+odRS+h9P6uWOovdCyJK6J5m5r/Re5Eet0hliNxyZN7EmJjEeodyS+hXKIK4R/oeNWIT0ooeqY3Z0tmRMeN9Nm6FK2IyO5t/RYHeGH9CJbSGxMssqxjYokYs/REuhmSaSpDSkVTJySxt/R+n/AOqP9aTVqyxaoZJqKI5Mj4Qozlyx4cj4ZPHlTSoeGfyTuLItvk9RLZR+i5Z6X1SjUZiakrRySTiyO+qGzotkIJHQRqI5L5M041sS3YjLLqm/oZTSIcaYfUzxtb2jDmhlVp7ko9SLcXQnfYmdR+ah+qiuSXqosebq0yS6YP6GcqRyQyVsy70hOUHaZ6f1sZVGfJkgpK0Rk4umJ6M3G2O2PG2PEkVTEeolxH6HK7daxk1wRmpa4PWShtLdDcMkeqLFNwIzTQtyikzoQ0qJDOCcuqTf0EnSG7fbHJ8Mu9MeWWN2mQywyL/03jwQnZZY5DmN2NGafTCvockvjvjNxYmmtFJp2mYs97SKfKYsrXJ+ZDyjyI6yWWKROTk7f0EpJIbt+wpOLIyTWiZizNbPgtNWhxTOj/0yVBc7jnJ/P0MpUhybftJtMi1JaWY8jiRd7oSPULe/oW6ROXU/cVpidrXFk6WRaasyq0/ock72713qVMTTQtMeVpdJN7Hy/PyZPhe+yLpi167Q3w/OyT+F7aVn42OD/wBFNdkJ060QyiL8zJOtl7vU0KciU7RfZCVqtWiqE7XlSl0obt+8h9yla7Fs/KnK3237SdFX3RdMTvRoZF+RllS8FOmbSGmn2wlW2l6PbyMkrl4Vid8jTXYiLtdkX8eNN1HwnqpJ7MarsTp9jFv4uV7140X8MceyD+OyLp14jdIk7b8eL+GNU+xO0LSS+RO14eR1EfvJCXsxdqmNU9Yvsi6deHle/gLtvtf7K+yLtC40kJ2vCm7k/cSGy9a0a74OmTVb6xZF6Mg968GTqLHz7SQo0N6oS0aFuh98HapjVPWL0Y9mLwMr29pISok+xC1XI0V3J0NKUb1i9Zog7XgZn+3sLRIb7kXpwyh9r0hKmTW96Lki9GQ2lXgZH+z71pGI32rStLHuiPA0Nd8X1Roap6QejHs14E+X2XqiMRyob7l2JkOBjQ+5OmTV76Qe+siLtL358vuSIxJOl3JdzRDRj74O1Q1T0W6GMx8e/Nc9qRGA2khu+1Irbuojy9WPui6ZNfOmN7aMg93781vLsSIQG6JO+6KHwNi7Y86sffH9o0NUyD3PgYtpe/k2ktGhIhA4JyvuitJPSPZZHn28bpmRCdNC40fK9/Ktkz5GQgUTkN9qViQyT0j2NEB6vvVpnMR8kONJC4Xtf//EADsQAAIBAgQDBwMDAgUDBQAAAAABAgMREBIhMQQgQRMiMEBQUWEyYHEFgZEjQhQzQ1KxFWKhcoKSwOH/2gAIAQEAAT8C/wDoBuX5MrLDwsW+3ro0wsK4nYcmNsRp8n7i1wt9s5b9TKKC/wBw7+wkxFtbGVigv9xkhHdlqQ8vubapl1+5czouL7SsWthmRnGhmi+RT+C/wZvgzDM9ti5K/uNYWxa2LsV7F1hp9nbG45I16CSXsO76mq/tX5NBGt7nuf8AJLqsLWMrsbHudDYX8kswtxxsas2NOhbTf7MWp9P5I3kzuoWu7P3Le2pdDFpu8FvdDLKxGHUvG45fJK+VO4opk1ZDQjcsK9mMa21FoafZViUFlRSppak1eVju7XJ6aIbtosI7juroiu6ZYvRNnT9xUVb60Zdfcy2lKx3h2NhSNJPWVhZSSMrTw6s2ZbqJmltCK1JG6+fshRViPemScnJ22RaT1I00leRPLpbCKepHX8n43LGab9iHdeg2i8n8C+XoOUSUvZ4bHUXe/IlpcktvwPYeEdUaZtNjcvYvd4Ss7M6/YihcdPKySlsiMGupJPLb3H3La3JvMkMTEnufk1W38iQpwiSlr7YU+pv+ENtYKm+olbqZL/I8v9om9fkci+G2htodFjHrc6mpp7fYWX3LkFGRt0Mr6iUVqyU7kE/2Juw9SN82go5VG73Y9ZN/JGnubDa6DX8kopsypDtlKvd0H7I1XUWuhaw772FLR+/uMfS/8CfUXybuxLZGxfSxotBi0NL6XNPsBPUkyViK9iUpLZkbqN5bvYm47bn1b7dDMkjqxRuZN0VXpH8mkdSdR6aWJR0d2WLZmOOzOpkuyUbscXp8lRW0LWaMzTvhqX1NPk/BG9xqb6GzHq8b6ifuXNFsdfXto3EX12LT/wBplktSMUtZM1nq3ZGVbjmzRy2LL2aFNGbQU9Pwy+rFd7ljLH5FD4Erip/Aor/aOk+hJtb6n1a+xNEqZKDSuf2mnUdvYyig7XNU9MX7nQWN1cnrYSa9dlqPQV2L5HKCvoSm2L+RTd7E+j+CCb2M+SOpm/f5L33whAUOgqd1uRoT6nY7GRLodmnK/wDJ2KaOyWUnQunYjenNp7MbS/BeI7zZlu/wShg44O/TQWly2Vj+pjIaFrGbQvYuKSsrj9c6DFbS5KS6F2x64SVpaEnB2uf0l/amNxt3ZP8ADJdD46kKLkdk1sQptkKVhQ0v1OzWVpnZvqdnl1YthnfzX0K1CM/gnCtSZnT+rMJSe2iI92KViyaHEsOJuZVfGX4Nnc1k7jRYRf4N/WkdRstyJGQ/uwZdig3LUhRvsiFFxjHQjQR2Wp2aRaxoZDJ7lkPCSJwJQfuWFAyiiNaGVjp3HCwyxkLIu0XH68yVh2HhH8CJyIpjve9zKiMGlpuU6dyjTsiMRQLG/QWDWFjKWGO5KLe52Y4FjKPHKSh8GUcSUBxViasaWRb5LievrSwYywkhWRmi+hOS0srneY//ACQRRpXFRSs0iEF+xt4LGNFsHEyjiWGjKWGiw0W+RxJ07FSOHUVtbi9bY8UhbjXQ0NG7ElqUkUFoJdTYT8F4vkaHhbm6jpoqUyonB2w1fraFIZ0LdDJ3RrYlHZe51+B2z2Q9WUl3im2lsRwQsbc3sPl6D57YygjjKfdUjW3r2W7Gu8RRNptRvodT/wDTMRQtSlsikrwRHBbeC8HzPlvit0IZXhmpyRe3rq3HodWyT6+5Ddsk33fwN5WN7CkrbiepR3KWxbBixtz9eVoty2GuR4VqeWpJHT1zqI6MWqPpdiVm0iWrRKNsIJlHdEPpL+DfB4vmfh8bHv39/XuiGf7ietmNbCRN+/8AJHcS75R3RD/wiG3lX4KOMjeCJb+udCO2H950/B0TL63RUXeFHR2L5bHCu85fBB6fkXg25Hg/CePTBHEa05Et/XVhE2L9wjF5jLezKcVG6HE4ZZY/kjfQXgWLcz8hV+iX4Jb+up6l07ijoWJIcdiH9v5PdDj3JFFXX7kBci5uuDGXG+RjH4U9mS+p+vIRlGu6yL0IrYl9ensS0zfKZTXdX5ILblsIRczGb2LszjmOZ2iMxmEy+N8GXLlzMX+S5cbuif1v1+JE6CWhE/suWTTFG8v4FisEjYlOw5+5nJTZ2qW7P8Qztmduv9wuIRGomZxMvy3HIcx1DthVUZzOmRlZlbSrP8+uxNyC0I6XILqZdP8A3EoZZ/k/0l/BTX/JFb82axKoTnbVme/Uc7df4Jz0HVfVkqlzPJ9TN7mjISZnIyE9S+DY2ORKZKZKZf5FMUlf6hPCutb+vR9ym9SK3Ka0kPWmSeiP9P8ADKW8tN9UR2xWEpWWm45fI5adRxbJHe6RJRmyVHNuzsWup2bRqZRI+SDIiGSGSZKQ7lmdmzspEac/cjCYoyj00OI0v6/BXNn+xSd7/gitGipHRHv+CjuLbCxsfJPUyosiWV9CSRL8jmORcvjYyEYkIigOJJGUnE7MyxQ7Fy5EplrxON3Xr8CWyKa1IWuyTVyS/qfkpLUW2NiTsJa3t++DZKZOoSk2W92ZV8sa/wCxjfwxNYxIwIQMpKJNEUVbE6g5mYuhSiRsyCLnGy/qW9cjFydktSh+lSes5H/SqXuyf6dKP0u4oNaNEINCGrjexHcji8ZMlInMV5ytFXZDges5fsjsacNkhtDkmSZJIQiBTIoSJRJxFsziKupKQlcjFCsRSFRg9tDv0nZ7e5cqyzVJP59c4CjGFPtZbk/1FxfdRD9SnfvQIVYVFdDhFnYqxWjlYupa6Wv9xH6kR2XIxkpFSZGE60vj3KSp0o6Fbj4R2JcRxNX6UPiKl9zNN21HCtFe4qjX1I0ZEpwZCJERJFRHQqfW/wA4QvUnGCdrvcl3ZNZr/I1JWI0qjV4yFXrUnaSJVY1qXyi+Wm38euJXaRxLyUFFEIZilQOzyaop1biZVjcayzIIitRYsYyY4p7k60YK0SVWrVdkV6LhGLHxNbJkvpaxZke84It3CrBMUJX02KN76lGKZYREZNDOIjlqyGtMXK5w0e4fqVOE7W6RRaVOZUnejL1zh1etT/8AUcatEcNBFOCKkDsmmRlhWWhDV/sRQuRjRJDptn+EjvPX4IU4xfdj+xUowqwaKvD1KT1X7mX2Rw9F3uyWxNXLaWb0KemxSvYW4kLCRNHG09pGU7JDpSKVLW8iE0upVr9qlGCv7ijmfe1K8EqMreuUHatTf/ccZrBHDlIsWJq0i5IhEW/LYsOBkGhrK+6OcrHarrEc1/tJVGOfyOQotlCndkVoJck0TKkM0WiUbYXwjEisuxCOrZxP+VP8euJ2aZJ9pRT+ChEhsSqJFXi4xRDi5Tr67MQxb89ixYaJwJRY2yTZK5kZCkQplKFjKJYomiYlqcTStNscTKxJkEU1hxH+XP8AHrvATz0svsU1aVjaJWqFR3KdJvUo3uTWCwT5bYtDgSpjpIdKJlQkQgKPKh7FRC3K0bko6iQkRiiOFb/Ll+PXf06plr29xrLNE/oKu5a5To2gijFJsqIe4sFihY2wYxjLEYEVzLCaHuMqQuW1ERI4Vvol+PXYSyzjL2Y3npRkjeBUjqUoamXuoj9RJj51yMYx4ZRJJc6GTJbj3J7Eo4IjhX+iXr36dUz8Pl9ik94lWmU9xO8RprUvcfOuZjEhLCwnyoZMkNHQY0IjhxP+VP8AHr36bVy1svuVE08yIVIyWp2N9URUkKSJpXusLYpvMLlbG8WiwsNS4xYxJE2SFqyorDwSwucY7UZevQk4SUl0KU1Vpp+6MlmQzIUrkou+h37cy5bjkr2Nee+CWFzOSmSkSZGXeK2w8Fhc45/0v39f/TK/+m/2LXQtCxmMw0deRc2hv4EdxFyVQdU7UlUJVSEjM3f8YJcnHy1ivX4TcJKSOF4mNaC9zphbUSJLQfNfk15m8dtbnaFbiox6lX9Qk/piRr8RLoRqz6xJ1GI7fpEg9CO6xvhxcr1n8fYFGvKlO6KFeNWCaYi2FWpZCaavgsV4lixKJUhPoToykyPCU+qHTstB3iLK3qSpU5ws0Q4eEPkaEiOPQqO85P5+weG4mVCXwUeKhUWjO1JVSvXWVnA1s9N/D8RXe5tjbkyodOLMiROJVERloNHUsLGtLLSm/sOnJxkrMvKy1JuZVUpHAScK1vfwrdcbeBcbKjsTd3hB6CdzrgsGcdK1O3v9hoh9EfwOJKkRpWmpCeC8jew2ORxE9C93ghSsJ3ELBnHTvNL2+xOH1pRLGUyEdBCweCVsb2Fry3Lly5IdyxXTsyBCnoSgyxGVmRmRYxlaWarJ/P2JwetGIhFie4mJ8qwT15WOZnwUTKd1Dq00TcJnY2kK0UVKsUxSpzOyJRaKctS5Wllpyfx9i8D/AJSwWFTYiy5mLieNxF8blSQ2IjZEq0Ik+L9h1JMZewqrJ1pMbwp13ElJShcWjN0cdPuqPv8AYvBL+ksEIki1nhqXL8l+RjKlRIjxKuT4r5O1bO0O1JVTtO4doKV2Xv8AgzGY/wAR/aijK6FscVPNVfx9icPwlXiH3dvcpUXRjlFgjcqrHrhfQT5rlSZWzMVCqf4Wb/uI8HKzef4P+n+8h8CS4P8AJLhp+4qFS52M/cjRI0vxscRw6a09xcK4alLRFSWWm2PV/YcY5pJLqcFw0aNGMTiKDTzLkiycbo2eF0K5fG5fBskyWoqVxU421RkSL6C/jQzJb7ses2OFyEV2n7MeVNHUiko7ktSaTIo4yfdUff7E/S6XacVH4IlrlbhesS1nrjcqx68ty5fC43hYSLko+xYuxP3JMlMU+8hyFqXvg8K889R/Yn6LRtGUxY1KEZk6Uob7e+LJqzEX5rl8EXEMZdF0S2JMuOQmvYuLCvLJTb+w4xuZbHA08lCC5Wkyrw1tYfxjNXQ9GXE/BzGYchslInUHUl7mefuZ5CciLI48bPVR+wkrvCLs0cFxlKrBJPX2563Dqeq0ZOEouzWE0PQTFy2xzGYuORIaMplMhkIoRbCrLPUk/sKmsVKUXdOxwn6u13a38lOpCpG8ZXXNOnGasytw8oa7oZJXNhSFy2GhxMpkYyzOzOzGkhLUyGQjEscTPJRl/H2RQ4mrQleEv2OD/U6Vfuy7s+ZnEcJfvQ39h3i7NElfBTLi5MpYyjgdmdkONiRMjuQMokM46d5KPt9hQXgcH+q1KVo1O9H/AMlKtTqxzQldc1bh4VVrv7lajOk9f5JIZGp7kWJ8thiWDGTSwpsWE3ZNk5Zpyl9hRVl4NDiKtCeaD/Y4P9RpcRo+7P25pwjJWaOJ4SUNY6xGSRGo4kZiYnzMzEpDlhATw42panb3+woLXw07PQ4L9WtaFf8A+QpKSunytHE8Gpd6G5KLi7NDFJxZCqmKQpFy5cuSY2TGITIsvocRU7So306fYUVZc1y/Nwf6hV4Z23h7FCvTrwUoPlaOI4aNVfPuVaU6T1/kZqnoU63uKoZzOORmMxmJTLlxETiK9lkW/X7Cprx+G4mpw880H+xwnGU+Ihdb9Vysq01Jaor8NKm7rYeCm0dqdqdsztB1B1DNgjMT4iytH+fsOG3M/CpVqlKeaDszguPhxEbPSftyMZOKZxHCf3QH8464amVnZT9iUHDczIzjlJ9fsOEMNUJ+PGUotOLszgP1FVe5P6v+S+DxaK/DRqfknCUHaS5YiRVk5Sf2LGHJJGZovfbnvzptO6OB/Uc9oVPq9y+NhlirRjUjZlWjOk7Pb3LFsIIoWvqcdTyVfz9iQjysawv7+MnY4Dj72p1Hr0ZfmnTjUjaSK3Duk/gsJEURep+oQz0s32HCN+d4WbNvGTscDx2fuTfe/wCRPB4PCUVNWZWoSpy+BI6FOWrProtElaTX2ClcWngWuWGbG+q8W+tzgON7RZJvvY2LYzgqkbMnTcJWKrtApblDdo4yGWvL7BjGy8FK2DGsN9V4sZOLTRwfGKrGz+oTxsWwrUu0j8nEvvKJHoUn3kfqcO9GX2BCNvBj78rRqjfC3hwnKDUlucLxKrR+eonzfqHDX/qx/ciU1scfTzUL+vwh18HfTnaNjfC3h0qsqU80ShXjVhdCfK0mrFSh2c/gpEo5qTRVhkqSXrsI9fCt4DRsXxt4XD15UZ36dSnNTimmXL8lWClEuoRk30KHE059T9SpWqKXv65CHXwo+/hNGz5beDwfFdlLK/pYndc3G1ZznKnHYhCpTd0yf9fh9d163CPhb6eI1ceZbGZmdnaGdGZF/A4Div8ATk/xyvZk2nKT+S5Q6oraVZeswjfw0rLxnEyGQylin9L8BM4Liu1jlf1LBYcZUyUX8405WZxL/qv1hK7F4UV5RfT4NOpKnJSXQ4auq1NSX74/qFfNVyL+0WPFQ6i9XireFFeRfJ/b4XCcQ6NS/TqQmpJNbHEVVSpSmZ3KTk+pGQnhVWaDwT9VhHr514vw+A4rI+zls9j9T4jNJU103ERIsTwrxyzwXqcFd+HHye49CO6G/DRLXXBCYmJnFQvG+CfqcVbwbFi3PfxbXGi/isWCEz6otE45ZNYL1GC8C3hPx2SiaoUvD3EIukZ/ZHeKl82uC9RiuXct5Cw/EcS1hS8NiXyRpwLIRxUO7fFP0+C15d/EuXL8l/GcRoUvD2FNkZYTWamzr6jBacm+Ny5fwrl+ZrxGhoTE/CsIRErxy1HivTUrsWO/jPwmvEaJRE7CfgoQhbnFQ68i9MprrjuLzL8WUROwn4CFgiorwJxs8V6YsGLzb8WSE7CfgJ4I3iVo8i9KgtcV6VKJsJ86IsREqoktcV6VHReQfIsX5eUROxfnTEQJorR5F6Qt/JWLYLxL+PKImLngyIyrEeK9Ihv5h+ZkiMudMgzoSRVjZ8i9Hjt5h4X8xJWZB89OWpEZWjyL02/LfxH5tq5sRfMmU3dYVFoTVnyL0WO/lmPxn480RYualKzwkVo68i9FgLxEheA2Nl/OyVmRfMiErrCvAa5F6IvK3Gx+Mh7+PJXWEXzUZWeFaOakpFRa8iH6Et/Ft4LY/IPbyE0JkXyog7oo96EoleFmx+jRF5Rsv6E1Yi+ajLoUHaocdT1uSXIvQo7eUbH5N7+QksIvli7Clsyuu0o3Kq15EP1O42N+Ue3kZITE+WlLSxQeanY4mFpMfJ09AW4vI3G/LdPJNWZB8sHZnDy7xxkepNa8i9AiLyDG/MdfIyV8IvloT2KyzRK0eRD8/Ej49xsv5iW/kpoi+WlKzE7wK8R8nTz62F4K5WNjfKvKS8k9TqRfInYpy7pURVVpci8+theM35t7eTkhMT5KEtCRxC15I+fWwvFbL8i9LejIvkoy72HErkQ/PdBeGxsb5V6XJCFitxO6OJ+nyfB089Zey1OMp5Kz9pa+P0I+G2PxWP0R7kXyUX3Sv9HL08VRcmktzh6Kowt16nEUe2hbr0GnFtNa+N0IeE2N8qXKuV+Qe/lJCFjRlqVPpHvyLxKfB1p9LL5KPDwo7b++Nbh4Vlrv7lTg60Ol18eK9in4LG/HfkXv5aOMXZj1iT+p8i8SnxlaHW6+SjxEKy039sa3EQo77+xU4ytPrZfHjQ3Fz3G+VecflZCFjB3iVvq5EPxE3Fpp6nD1u2hfr1OIrdjC/XoNuTbb18dfVjcWLY3yrwn5N+VlgnjSe6OI35F43B1MlZe0tDjKmes/ZaeQ643I4NjfKl4b8m/LMQsKbtI4j0N4PBbFxvmXhMfk35aWEca2sOVeeYtsenOvDflH5Z4LF60+VefWC3Hzrwn6ZJYLBbPlXlf/xAAsEAACAgIBAwMEAgMBAQEAAAAAAREhEDFBIFFhUHGBMJGhsWDRQMHw4cDx/9oACAEBAAE/If8A4A1I1VsSsRnZK7jgSUfxyMcBIk0lWTuDuydKZHUvBMlbhSEtAlLJGiP4rAk2J9EG0jVsJKxL1QqU7F/YG6pS8sS7p4grSWNWrOCvsi3GoJTa7O53FUJNDR80JOiOjX8NQaNDZFiTyWcS/gfNEtIVM2NkoKcv5DhcUTmi72yCQFe5X5GeJkvBIu+NJIwqIfJxI7j4L9DUqVY1SGQu/wDDE2yeRLazQQlybOekNUkjwQj9ga7SP2slY3YlPwE0lQowmx/IUn3GtfA1DC1XkiNi+JFFoR+4Y+5YlPr2LdNTEjTWyOeHsRM+P4TwXtkWgbgKGSJoUxti2cC/Y4mx3tBcLY4JiPYk4b1wyN9nBw70yn4AqpqY/wCou8sQrCU3L7s94NWb7HKxw/InSvYdUv4LC+TG6HgK/Bs9STr7hD3ilvvsTtqYZDbagiXH8HbNCU7tl5FQhJ+Du+40lqSG2vdmvJdE6nlFyNJ8uSRKXuKQ7ZLsLlpcjtUw8DeAW6fg1hx8jck4ngccqErv7CdwT2HV9/ckrxYrgVDbXvCd67m3ZsZHyNwtHM8mguUKqJs0n8HVuDmBkpN0iQEIEq0nZIOiJI21JMJyOOEewto0/Q6cQcP+gduJILTb+Uz5BWa3kVSfgNKmBfyd00vYgbnvYo7SRwZOwypMJryNcCbimVxfZsVqTRR/IoZCBuOH7DRDT4R8jgU78H3pPK2tjwHyOJRof8BjDGSlIiErIUEDm4CqrQoR+xwL2m41wiqU7G/Atep0uSGlaxvyuQqJlr42OISk0lTxcsbamVevYSWj4sdvkYsURYktxL4R2BEjb8EVmAqcpm0x1caDNi2scx5ZFOzZEPyH3e5wl4k18KyDkmhVQXgOlN7mmNevoSJSxvOkWKbkctCdsnUvCHs1Dkbhx3Itqf8AmjhkmlkqJbG3J2sVNmGNs9DUH/3InrJJ8BTfdCkUN4W3BQuWhHPaWyEQvtwEzuGWfldjKNlD8B7EaTVhUOyvgS5HAuNitKjTJbPuWiXuyhO75Fa4o+RHzFwJ3qSh+vQayJdSJNJWaZwyIbRFXt6DGHJy5IguBUGxSd0kym3spHPbFZFXxyMalqcfFFUt/wCyMiiaVexY2zQ4PwydOqj4NJfccucymrHEiE9x/Qm8WSrldFLuo3llLY3MtQX2Q0Q5OXIaDRQSjY1Sh0+e9MhIe2+5JRWuS6EkgqShHP8AJDikx+h+upKbt6GlSKE3IarqOI1DiJCsbGK1lQkog4koOZg7H8DZSqZpjVDdi+SyPM/Im1MiaYanyXKvghsSv9BLXOyNyvcu5pvx5/IpEWvH9CCqTuaw1A0t6OX5GpudDlfKJFfaBGVQHCBF47HItslzaOLsTgTO0Ct0tvbJtmp8kk2nrgaxLg2nPrrNfYqSRIg1Up7ITNZqke0jXa8J0SXdQ8PuCZkk/NDdMZmpnRylLsCvTUlfwTFdySGxC2l/ogI9hAlku3gcHK3SbfEjVUIXTQWk+eSjDZyJ4g8ExiCEpbiSJcN8JD8KEigtr9hf5En2LFfBfnZECSpNQRa9yqXuRXY0yjgb5wKSxNs1XECsa7C4Ci0miE163wOpDWStWgkB7AzY00uxe6P8EGVrs12E0aHhsnIDXkRbQdT8hxDg854Zv1X2Q6Ci2pI9rbkk+9EFM2m9/wBkFcne3ItIfArsSVmVkO22m1zCn7lJmO6OQo7LNX3H/ogpwxCdLHsL4EtORopvkdRK9hppzBBuYCkKcgxvYbohdWJJEShetJL2agWQy0sffC/ZzwaNjTaXx+hurTj9CRp0LviE2FPFH7EkrCCUqyN5cPYuB5GrL2ItcjZ8m2kLSgrpQxKTGqJLWyVTLErTSNprts1Tsfv2JUosULxMZwSZwLIdivEoYuuRvxMH7EnFiVs5FsfrOrLWS+5ElAybIFS4T5FVuJGRHcnTFeS/BGiQqK34GuPVQmF2FIc00vgmU08NEnNeBdp9xquEyJuF8DR8McyECPg8KKfTsfoaD2lPdiR/ZE2tF6ggr77LZKjoTuBzXsScoS8I/wBIarFCw79ZZQQkVeF1JNskyQEqIQh7grbQjTV2OwQ02xr8ARHb8Bf+Ef0a0JGiE+BkKIgaHhwyzwNEbEMbDO44DeCOxKtYdMSwDGlIY/dG4WiYecAiHXrKEbJlsQx3whdi1M9234GlSUcfZf2yEJf+CKIghTbEqT3wi1M7ZDsvkmQpex+x3F3FfBMlDG/0PwNmgoTIIjIaIDRBCGvAkJbcDHH5GOFHO+4x8SW1MfIpka2P1lkhEOh5bY0kndiWV97KyZIkS3+S7uI+EU7ezyxOxrZwNSSWENL5FknxFZsJkSeRokdrQ7GuXqSHAQQ2kxxC7mxhDwQaGQNFmKvf9EJ8faxhaIuyolkXBx622kiX3JyM0xKTnue40IhYVRXwTK+RBW3oY5fyJKBJT3t+xQOBpU/YbWjUJiENtYcwUe+EbwcDHesSMRbOBiYxKfJTpkl/zs08f93ERVVxXwTaBTT9b4ElDtCdjsaECewQk0mhI9mXe+cWnT2lnmP3iSCTTBM4FtMDQ2i/wT2Gn3mxs7tjQ1x8mhoRIw0NDQ0oGGxRHyKr44FCSl+Eaf8AMdnvoUo+uKKEFA3Saz4E5W5GllIXWqIFhuEl3NaTgexVGK8djn3HoV8CZOJglLDnYj7EDX9Yf7w/YY8GcjxojuhTJxJ8M4I1TgOfXGm2hwoBJabdChUGffIgb90QJraf4Jly7C1uCPfiRqzRfY8iU78/JBKFhaEPH2xFjQzuW94b79EB2xkvsM4Ln7C44P3hIOzEj1wwxUVJ+LLfmdcITtdg5M4hMfIg4u5r9k8fgQLPkT3ztiFzlexeK7C5EeMRsTQ1OyCHz7jND9xzYyrx74XxeEnARuKNp9cIRSV2FmfBM21c7RTQQdPtI0UEvk/DEK4HMcw7P2Klb7P4NMc4U2LC8YMUjgdKXhsXviB6OwxjH2GikUcisWxbFkVX9dWkkRCLyNJmSBJ8SIcps4fJitwcCuSr9oY6VpTL5SRf5UfCIoTs5gXuQYkiJEMbhE7DjkekhnhTCJNDg2PccMdxskkX+iRJduBLyfj+vTgShHCUik8FNZWO5dy81MUmnCfyQo7M/iCJewQhECCeSi2NRMyDnZJ2z9xC/Y40ORRKGfHIljGJGKjExe0Xg0SSRHvBMCQnz66hKERVlhXCBN55Lt1yN0btAph3dk4u3+gmIE2LBQUnfiCP/WRu3+RJDY2+FZA+EOW1+SCoSSKhjbs+w7E/AgmPsMbgcCAWhPkceTlN/Auc6+45kNNx7MrOGLA9dMkyXJGkJIIkOB+xpKFfsib7GQpu4kQLkQtkdCFUrHo2JV3HNKnMTH9sXR+9W/JLBP8A75LsXsuMDUCRaDSO/nlGhOu4ppSPl9/2u5L8DwG8FJEUYWd8Dl32II1WO0D3TcF7d+Rl/rq2IoYiX2EOx9kIuuOfsSO+CXNdhjU0X4BbK14fqU54O7wJ4KUvgvY+CPZfsnmfJGtjgPQLtJkMrxYu/wD3Ylz+RvXjGQo1jjkM7EhJotoXgQtpBVppT3RMJyb8Cv14ThFBjUCDITB2D/ZB8RpJW0lk8LRoIvDSThh9FXkT9pwLxiqtHBF0kOEdxQzYQkRJcDUMYxFTeNzQ2Ygm3bGmMmowWDsj7jg+Cfr0tDl4iCvYeQyJIPBBU2XQexIchSedElieWIXb84IOcWkPBR2V8Q1f0iVtXwO6YoFgp4lNYmI/SMslg98kO4vId1nSiIaLwvXEV5tpCNQvCHBRz7+cOaTGe6FpprgSk9h93wRS+WxKRAlg1fJ8kGXaRv1Dmv0hEet+xyRZKwNXEMZreGwmibBMjYLBSOkMGtYltohW0M9mOX9xCg3toJX67cjXbXsRhbH6EeCThvUdkPRCFbEVHAWQtJvK7jRbgYiGIgExOxD4KORJDyza0ctUSCbCaSSkXHMBtDEJ2JlioyBYqOYxMbsPLfIbSFVilLSKHAnHkK2b2pVlhlHgPpj/ABsmBv5Z655saR4KQTCWJRNZSRDFwIsNCSV5It966g+LnsPAoUylg3Ox2t2iuCzQzjNQhamSEko9AjUCaRBYeWaRYbIr5r5GyEhpyMRIhReBK6KUZ9yqv3QmDPyvXIF4Y6QRkcKLVIYTKJZdhYX3sQR4wWIEnE/sSCXPyJKudqk18j1A+8LL0p9nQ+p8dhJ7GIIuBloStk+6tG9chbGx3kNp43Mn+2z3EnJxbKbEkuDgqQxiQth8SKD1/RHjj1z24CSDdEIQ0kYW4QSUzR4ECwnk5jGJULiB8rNMglT/AKG1/Dt/cjuq/wBH+mMmWx2R3ZCPghRYkjQpeBTy2h7NdhNoRhvkmYpNfhCF3Avrg8SORSLmWCim1wr2bBZYokN7mxMQ8Rgw8GZaFDsRrgl4E8TySEIQszqUyJvA7QO+hkz4IVoiBPXZIu7L3iRsY4PBIq7LDp5UWIWEqwiBrCp8Cew0IcHiLUToiIELRybbN2DSQdELYVujthML9167BPpYFNdxgzE3R7oO+BSIKZr/AGLoHPYkQkIuwkcEUIXJsdD2SMWDGFdhbZ+QOIoOhpQtn57116jcgrtZMTF0xTUgDw4ppm2U9CYmJjJ4bWVST8YQJPwTh9hCfljvEiwlGKLYoj4EwoNx9yI/DZz67bndSNsHyxYFQOYIqk0J0IQnoTJQ1icjgfsNofvglCeRQkJFgZOEKVWDMlQ3bxs5f98n9oktInyLQ0e49evzpRbCJBo0psUOiTaHs4aEiNDZOSvZjUaESyXhScnPsWKWfYhqYl7/AKPZ/wB3GyjkYvhaH3RpJsHHaUSPd/nGpxpeCEH4X69tMaRV9A/ZDIwLQQzSIcie1hDUScEtaG0t4Jo0yLwIfIyNVYiX+a/sb2zehbKsUIITBe8MiEYw1JsxKfgSSNexy7kaLv6+jl/kRBXQbTKG6hM0gsk8isaGESNwJ8kyU4UkyxPg/QpfJP2JTNEoXQygai0XjEfJPUj5kSE3oT/4f3ClLzobf5JfY/N/X3U2mPCfJDE1ReTE4FGNp0IcYRaYL5NkIWEEeRIombjsRLHJbSDghDYZR9w1ij/Exmi1ulyyCccruMd6oagXB7m1DUKj7WfwBWf7o3BEIsJSFGlpyso10HHcv3IbEhRognwfA/Ya7UKBckQgv0LmLraxcSIuCyVnwUoxqB1qS76LPsQOsmNwzPLzfwHvx9oWX8ZAh5FmNkMbsORaKdkqcSdsciotaI7jDEl7sRIhFnsJUNxtEh6yEdx7HaZQJv2cPA2/WK8jhLR7YP8AgbYYrFLLgQ9iq2OL6Ui5FK5x5NXhCc4VghNMUbkrLzNIW4iYFpjFBSHbX+MFlqQve/geyLkWyYhrhkyPki0Ndh1NC4sp1jexT2K7YvnpZI4JNiJr/wCkgYUg2hobFBehN8RhojJ4nfwRvhiNuMbGhxuBcjDFaYWBpUylsexC0QRqaHOBm21PZit77Xkk9/f2xBHI56CTcDizcH/4i2vOLb/gkRj+w6AjUhDQyCcQV2GF7kgTHotvZI9Fj8bOAnP2Kx6jexnKCmJHCaOyaO4WcpDHNUIz+7/3caRP8H7BLBIW1YNJHKkKlMkQ59zggRw5fkQh/wCI5wiTcENSzlEPbgcwW2xfiE3spZoWyOwzvQiILcuRMIu6fwa0UxmRJqYnCEx+AoklkdhFYkZwyFti/awr2HzSm+5/tBR8n5BbeCY7EW8BycEVZwabsoPHqfwSIpTYQHcwaCY0MpB6cm1hOiI5QsE3Aoklk4cSBMnv8G3oSznt/JDGn3PwN/P4FrvhIKEZRSVQ2HSa4UX2T/zHlzUBumtChPfCGkfd/wADdsTQJIriyHkoQjjAp45YhO0IG7sJJNBCTyDThEMUQpmqFCj3oeV2NPeP/SDZTJ+w6ZipFJ8SUj5/uEYR7iSTJXyhRe82LGBBqkiAjXe38EsWriJJEEhkk7+xKJIeULommK2hMT2imCiyTcrNiEQuJzsOIkP4IZcJenEwTeK3yyKLvkb7P9YWlDomydudid4OiZ8Kl/BJxW3HRV2r7juk4JsssczmxYORbywyn5GFDQq4waBoww0g8h8BDIiQSvQ6jRNHdaIX8Db7CKUivOBdC2Gh0tAZMYZQWFOW2MgmyVwIVJc+w47jNWMsZKwTEVfi3/AqgShQShqYYjAlQXV92EoSZJKmTbAxJOIGGhsfhneNJMOxORZZRBUjzi6/gVEiGhTeZcoibV2i8szldTgkk0n9JoQpHLYmkmMtDY8I3sOkDBWhuJDRLGLcBU4E6wrwJhNunz/AkpYlCSzzj+vQyCYuw+SelE1DLVP2GK4wnymbkD3K2d3YtRpESNLsfDMh8EmQ7SKDqdYaIeTz4Qv5P+BXSLq06LV93gL6zO3SysI4IQBa44EVncWQJcSYiMMJgbFmYYqRtCiTiG+4tiGHFsf3h/wKAzwThmyivPvwYuTvJ59upjSaZOz9jlFbJbRQPX6FNdxbnFOJK2xwdzY4CVJOLZJWnJOiXspu6/wKaXRJON9DENmmtMfNVx/cXEmnpkk5UyYo7OGUYPsImVbXY5m+2FHAsbwp7jG/BsNLGIkkVkUIQ0r+AkpIBHAxjwukYxZfzdnsS10/x0PBbKTQjK1hbkUODYj3iljCy/Md5nE0Eg4w6Utt2X8C5MsazNiEcskbWGfLRwZImPsOhmgzKRMYLf1IMaKnaNKZNHkGreSbslsaDZR8ncHkNtuX/ApK2OCc8CRMTWZJyhRQpgjf9CcPIgdDZezt3JJwkPsMaJ7i+Bodsk0IzUj7jfhGw+H8D5GQPgtC3/REjGMZZInh4ZB8j2iNNCFNSUJGQaDGsaSVXFlfjGhkYSWOSpE5cfwWK3mhDFs2iCSJGOMyILDwxi2xprkVNRw7hK0OxoYQYdk+zIC+AgMQ8K1ciVfH8EczxAxZVoU6o+405sZJLwsST0bGNR/ZACnhjQ0NDJMR37xY3H4Y18EKu1f8DkTwRC6W8HJJhClYblfoaqVrrnoeHWQhFWaYk6h9XTIH8Hg07JAif4R4af8AAZ0CJEsRIhyMccDTJNCEiULQhLsvlDSTBrknzhdDeGhE0iOGQFBryJyO8WGsNixzdex89if3CPdl/wAASbcCAo+TY6Jwxikjl7GsOQtOUUn3Ec9KzYzg8DioadMmXC785GMMRArwtDUxxsqInkH8AkCeT2J8EZZF4Ts9v7O1RjuNInLJWxRdfKIIY1hM4xHnEsTHkwhvtdOggjE5ItBZxK9xfr/IFso74avG9kIif5HFF4cYaknLaVsUJK+cTsaynA0uMN7xAmLjL/YvO912wLDIGptMc+raEoS57Duwv13lFYesdx7NskbfYSKvv0dx47k5bTyKVrG8Gn0PDxIsJtoTxkxYJy51oWqQSwhHOvXEljQsJo7j0PDlFv0J7Gh9EkSMmE3+4dqVokknuPDQ1eGVhDpH/QLQ09iYmJ4YoaEdsUyNMBra9altkfHQyRMokctAhKEuCSVmsvDWMqLVjRITEwklElPpRp99FhCGh3ZHcKxBjpPvIWP5H6xLngSIHomCWNj98vR7w8wQipLIyzTRA0IZEYbk0JYx0J4fQxNNCpH/AHEZeX0RA0yDZK8Tler1wlQi2KcMY7y2QW9kGul4eJePk4GiIbUyOBjF/M2R0PLj4bGyDh2YjgiWVsOUJQRQoxteqpNuBaQRsksaSxBSxBI54WNsc4RN5Yycw2cDwlSSNsWo9js+OiMp3LoM7llQ13Cr3G7ltJMsCIUNQ4xNeqR2xsSr3xUDODnEzQoSjE4g5GSdxzmMImxjUyVZJukVhdlmMLCHhMvX9RkxqsNhojoed8iY0r1P2TEnBfRJzhLbxLGyc3IyR9D6WgjbAmeaY+lmhoJtJzOxDH7s5ALx6rQEupb6hBBBA9jnCSoxoTnE9TBiZNMTTy+p7LEJDwQwwpgOEQ3qMznsQR0NikQisT9HAycyT1ISaIC0U/pIiGGqKUsStwximuwqti0G16gxJIWi8US2EhrEkjZJNki1iR54PAo+iRnPR8jUrE9iJiVh9LwmLNoSz2U+5FpfYSPBLCvUqaXYWycOkX7CMMkkkkkkkkeB5PB2NNE4ldiemcRKO0QOsSZ8jWFhkYWyW1YbnsTEK+B0ywmJyvToCihuC9hKDWDGxzh6OBD2cjJvpJJGzkROZzOJJESD0xqp4HlDxzhWhFWhhuOhLj9MiEISTCNhVhvDKHjjCG2PBiIzOJxyIn6CmBPCHsgGteCBqzWNDORD4e4eBI1khq9OEDsJl9U5keGLEEEYbJJE5QuuSRY3hYxIRhD6HwTNsdM5b0xIUCHehIWG8X0PsLCHrDfW+qnWyS1ZJwQSjGJR9SeJMYiRHPlD+lSS7Y0JjkvHJz0I5y30QRhjGPEwSbNP6Uk4ktCbYnGIY8cjEmGpvImy3pSiu5t42Ml4jD6J6EWJCEYY4wxk5k2iSfoThNYmsmCn0PN2DEyIHPQ4/R0lERhLEjHieiBkLG8NiMORjGSN9SD7iysPjpWGcyIh1jgY1hHCPHjCdMWHlja9HXYQsPCH0cHIyZJgnCJxJOTY8STicSK0Lf01snEdrEoZ3w8wsRGEy6Qeh+jJCinEkkk2bwsNkjZJOEyScSThhvCetMfcX01hqesmBEUDTsKVSPLQO16KrcFcZY2T56U4TiBkEYSIGhwMNk/QjC7CpxiRfQROIhbE6x7dEBCMaolYkOhq9FX7BYbZIycTlvKQkRiBZ0GGx/RnCZ39C+nyjUx5RA8PFbOzgSUbA8sP0RKkoMbG6HpCXnFiIxyUCEZgjDdFGJ5QQR9DagkWF9JaKxkZMofQ0Mi2ckRFlFl6IkQvGHPcnCWiBohEEUNCViWawsTQ8JvrMUE4nMEHHR5noDT6Nl4pJ2MhbjZCORYf0MsqLDZtkWLMEYgQhdKcDG6wMThIj6oniRP6Ek55SJkhyQPDQJWyL8inbBCFs2vQltvJ5gehdCQhiHjgkbxsThIS+pIhU8ro5xOay1KgmY9rDwiB22R3kh8xA3hYcfoKUFoRH0VWUPEjeJspCRH1UyoTwvoz0So0yejY4zITNWLR4EIeEx79CJaO2JFl6xPUh4fSCBIQ/ryfW99FC6OciZMh5RMzslXxhMITN+gNA14bExCJHlIgeZGPAbG8oS6Hh/S2yF1c9KLz8DSaHYHa6I9i0ymmWiBsocf+fsbEkCoTGIbzJPS2BsbyhIS+vIh02FhdMnfqXJAFTJUNZRY4oYn0PfoDkbDHhEi6F0vCfQSEsLpf010E4X0FhxjZDZGxWscYqe4iDwUsSHlG/QV4Jg4yicbdLLqBITpjEj+mjVPKysT0zmcJBoagVnE5mJkiE0kp0aegHMR8dEDEhDOMN4GxvKQkIa6GMY/ox/g8rMY5yJlA8zR7FkRS6GHv/O0GuYEjnCxOJG8DDeUIEV0tjY/pLDGqfTJP0UIrDF6Sih3Hoqno3/zy0H2RhCWGKicMhkG8ISyrpYxv/JfQumZDwxpWXhGRDEHOUcfWkccr/RI44H+/r8TTCELqbWBh4gSEsPCWIyYb+qmUPfSn1z9BI6VLDsJLD30L6pVcs6Rzk9uL7LbkdZNr6z1Go5zJPQ3GQbwhLIycoy3g/pT07P8AEWpHhjD3iCPcSXKt/gYKfO/oLuT7fPHC6Uko87+n1ltijoQ8SNgbykJdDELHBIw39dG7pWJxP0YxEodMY4xAsaT2Fjpr+nBT4w44Xb5XcuKklHjf2+rwzasOSuhseE3lCC6ULDY2Njwvrb9a+knBOVscYZJCiQ/+DR1k0xfZaUXynpSes239ZclVJgkYacPKNk4Qgl1oYw2PK+tv9FfRWUlHPTQnR2HpfVgc8j/RA54X+/rrY6TDeLDeQbHhLAlicQJEEYbHG8oQsP6e/wDh84aEscbEALSfQjj/AD6dIYeyoeA3lISExz0LLYww8rCwx/S3/wAVi84bCcMoPoRp/nWNIxWx0GxvoSEF0IgWJGxh/QfUsLDNv8ZZQxxYaRdvQ/BqNihxjyhITLnC3ljwY+hCIw/pMe/8TjDRAxD1jQ8D2/8AJ//EAC4QAQADAAICAgEDAwUBAQADAAEAESExQVFhEHGBUJGhYLHBIDBA0eHwkHCA8f/aAAgBAQABPxD/APOx/wDyAf8A8sT/APlA/wDwIP6oP/6zH/49X/ouX/UFSpX+qvivjP6Zr5AWOszzLGPpDQcSO+QcwFcCsl6AJVLYg9iJKlSolZ/StfBaUdtRBAlw7GogWdjATYD3BG2fcu8HqIqN8QC03kUph/eJ2AOKlNIwigYPuYWFl8nESLcsqJ/SZYc2KcMuqddLUy7GuZfiN4Kh6onUe9vtNkUcSLqKPHYIPQJytRQvzBYia04BcHNY6WM0EK2Cm1fsy87IWn0m0s+yZgHqNmiLqWiqXwxiOQIjh/owGK1O+jhh2OQqiid1K7ovpGWUbpEQlpUTkXCIBUdPFSojaDldXOGtcU3L1T1Fy0d98RxYzU5fth2tY8xYw8+Qi23jhIqOSiE1f8wbVMQKMlbQoaIWCV9QFKHttBdNCADU8HUB5BGBK/okigTiJYjpYhtqmy5O0gEMhrUcGz2tjdDbrX8y7X6lmEbb37mKlULZ46hlK9+t6YQVdlrq5SBfTwS6iKIXXrSUqBgwseNt9QK+6sCAtKoU6GepEst0tXq4GitvDAXPscS4FR4Kr+INH0IMrJajkqtpO+L9QXPjPkTpncEaXKh2Xw1i/oXE/Ua+D/iqEOOiDER6qI7Q+/UB3p5XCFQYHDl+psgeALfQIG7gvirQhl94B9qib8qRwr3GiL5hwpH0xUHsfPibUihuX7Ad8h5IZKHwvJXK9kRVtRr1fcLp3pRoZcBZqQvuhj0IB7qvVxRjXSAAHIJxQ6FPtsBphQU/lhTE1fgEDjvr8S6qhOExfUf/AJH1DVBsVA49k1gqNIYn/cJ1R8u2NLe1F8R2NrcCXputHYxIFZyQYDliUpd/0JUpliOCI3ooNbtZcYPt2s65HTq8EHgI/dlv6gd+vqWIy3fiJebYWlQDouy3j7IS8jC8AYfmViBsqgHfeStVqkrsLNlCzaFc9NEJoVW/Y7h6p+ucsuIqqVtK6R9BByw35IWUarEKqdcDSlcSrgQobW/9w4K6quzWZ0z8TZd29Mu9KC7GziG3d2b7GClrwihZYEgam6CpanK2D7jQtITR+GNbsEv1BtdQLTJU7tP7SLQ7rz8U/wDLP0glNEaniGzbBxgHeSAdR5SoQPRys54RXpXIEA8l1sY7qNTtTFJ5+Bpv5iCqHKr/AGSgYSWqnXbzsBWk2hf7QcwVENZW5UvW2re96WVgIdpHEE/trUemKWqPDjX7zCgVh/8Abmzel1sDZBfBsDSlHiAqoVxw8fcPFGB9x07ksKGOw11KfdzkjcIlS1A+mbpGp4GytQlst8TggDS6BHoDFDq4JPwZwPE/SV6BwHTOAVayUd4f6BtVwFcI9bHlhrQPLOCatViRBP7sIuj1ea9wWYKsEHFDtUr/AL2FYtbUC2ojp8w0FFguT/gisUc6+4AGFlW71EFXUCpcqz1o+0YqjO++jO46AFY8pl9ECJXx1EVt0qHQSvYOlDXVNxhZo4cfmN1D7Q/iLrX1ouKCq/F/xtw2kTYtJXhi9RRsKUG1jhbalRgdq0fcYBWrX1NMbF/ZiRFXzf67mGRsNls5L8yhF07/AGYaFQKPHMoqrG7IRdqJCi3yYpXV2VKF/X+kV4KupcuaOo4hyqUXc6zXEZCpxcNF1oUS91y+R8xUMN8Vn7xbBXuVMowEuvcQx8obWRobqq5WEjgbm4aC4v6UWtjnv7lorNg8j/mNy7Fv3dbDk4LFOVgs0E3zt3NEBQ4eo0DtiHn/AMhcEotkGqUm+al1Sb6M+pRgV1XtDhu2urcE2n7SiEYHL7SUKQ8T4lCe3o9+5VgNI65ffEOCpF0dfqNy6UepkoK33NcTSmBAdvW+I4KC3RkVNFOIFFE/RIpTRSPpiqCn9d4omCZShtvuGRtWsqt9uyvA9wf5HjHlg2iaByBcEwvE3BbQzeagPdKg6PRDuIavgm0HBQ4Be1yzmd367oIBblvH7ti902nOxuC8FUnft9QmoU2njnpja0KWLVGOZ3NhQvkh2AyHgTuGuwbWyjdR2u6tMu60/EtYML9l4fUrZCtnFE2hSisoYq0aUo0fUGq8KTSKJdoyczTi3WXSI92bML0BxwkAV7W65jATq8kdD88eYYUOhBPlIOZv8RjobQBfPlhtIFqv83C+KxGnU9wKL/Fl55h4RdPaVVP1xjPfIy34K6wqH1BhPGe6hTrLh3FKgWvz0RynUArS149S+qTaPmpZdKar78ELQNNC313UbWiJTVjXmPboAVXlHTLParj9oxqJ7uOi/hi9BGp7IbbfIt19TrQc4NQ6jQ5XZcWQcHYfnmZqx5H/APnEC9I2ZUPxLSRtTQN80GO2xVvXFd2GMjZi+PXZHsELZbXLMAaQwsplxYrKN2UxujpCtJzyNohprpwHMHDAc2Py9DkFr6G7T3LQg4zllyKHuoOqAGrJb4L30yh4VVD2uqk6PUMBTQkUSautNcQSSGjwtDmBiSoEvE7D+tEKsssisCjgRnJA2INokMaB4d7Y11QF2/cD2i1+oaFHlINU4Wp14qI8cVn1k5s221krgl2SVClr5jVpSLQX/HcvafR/AIK4S+b6epZDmBnLFMAS636fcNtPY5zikjFbLqlv04hhSjoj8ncEQvgwL7XzN5aFxxYG1oDeTWGm0tlnIjC07lrH08dkV6CYcNPM0m6j0XxT4iOoJrVHGdB4/wC1mdQe5itSKbHTGTENOpuUWtyhl9EA1SzVmv5ZZmiy/MOhjYZflF3DfshWWlYnZFDSjx6IzHK41Z0ArftEWBUR1UZLqxgB9P1sQceLm9iLWGkPuDd1LhFpS4COOgjm00P3uBVtl12vEbXQsV6OyUYaxbR7qDbYOR/DL5AWkAq/cOelYzg9EoG7yCAjmXnuj09Q1FaWl/vVs4WBphQbWSvukAvL/apqSnPK+b+5ud3Ni3lQIJF0yVCaivDtl4Apd81T6lTMZQv965ZdfiXMqsQwX2w8SIQQpSwlBTXFXrHb7nJlyPP5YXdberXM7qX4hbOv2uYqrm8BP+45zQapiododVn1M7NHB4vyzo4vf94DkOOOIj1LOJVVgX4PRAp7XX+Wc0YkRxa3L4lxYusYJuSl/b9Lr/fOlpKGTKGGSguoIqccmQJcK6EcoFja9VuPLkEDgW/Yl1KxNvW9RN3eVVKQFrl0dziAxHZDVOWgO3bmvT1UNuBVBX9k0om82UVBugFIdC0SxwFVUKAvt00lRY9HfY6WCNo3Uxs81AEBxVfcITeCJT4lRvx+EemogCw7uO2SVWziXNtKAWiAAtbb7ZztBdU1LgLbx5jAX8Z2xhZw9tP0zJ/IWxGXeyepZjQ9bMm15eyXFmDs0DHii4gCBxUWFcq1jeyWiU/dGuHAQKEnL9YJqIpSEIhQlATpsJ7QARNFLAMTygtth5wlMBDl9eohUts4cxKpqkKIhOLXO2SjHyW5SAC68v1yQnDtU8tfieVUzLtO5pNcXGWf+ji5kCo6jkgsiKaWaVtwloPEMowXp/ZIgluzF8/hqMXNFY1t5sSkxrvh0yEqiW6W1b4hCgcqd/bEWFU9PqUirRslVbQ+JQJ7H6mNetxie4gFDTzHVN1Lrhfop6ln7pIKoY74SDaK3mM2m1lRfO2fzNfJ0wLy03oiX5PDEnOjxK6bcWn9ZuBiWlu50jmK2W1HMym8fiKoLby+oPdXWsiNqCy38ZLZ6DHe/UOFPI3YEtSnWvMuAurfr37jFFDT33f2R+z2wFyhFvoDu+iB5qzp/iFLs1sFtTzzDknHDX94iKsDfgWBSrarphsADmdNPNC9MsfDX0s4Hj14l1ceahnIjbUpTnfwFx2z2XEbbOjIZAMgLVr+YM259FQehUs4gsILeyrkwZpwqrotmr1Ze67/AGgRqruWT0+NeoaZBYX7lgi1UlzdgZ9wlwiQbP1d+OcAKhqDWQstIcqWboO68+oqml3bLaTjwI1Vavnw/wBxnEkXXqAZA4Cpfrcy/cOWOCn92BvFt75MJYbV6dQkSuz8HiNNGdJmf3uary/zDZoFmhOJWy3R72IwHDxHzGEEtTbv/EyKKvDKNIaq/Z5I5r9TWjTPv3Bd8mxuJXcXem4qrAVF1ruPi7g7kwoz3JLVunsIt5/8RaBAmdVtXzywjK2WULf/AGJr4vsjmPIsjaW+IaVGcQFPb9aa6S7Oup68eIoj6vEVaLNDyxooBdiviDhWrIAQUkm9OX92IpDyp3dUKcVLva88dEYtQuPK+2a9k9SkbfS3PdRtaisHn7Y00ZMhRi8PSwbzwAvnzC5PESrS3mXW0YCeooBx39oevr8xIBS3fcGqA/PNTWzOM5/8iQWf42aVir8OCdypL07ENE3Ht9xaAcrMLso1UN/UAWBjKXOWCTO3fRE8H0fbc8QbQC32IdtxUl/J4vxG1FVpbXB+T+tQqqhAJKImHom5bKQmqiWO16hfncFuhVcuzy1D2NxG4rZ3d4SkEwt48s8O1vrjmIByvZAFxhp7olDwsodkRS30QV6Jp7d/c0Yk67yDM3cYsUXbzcvt1gSKq+7iH20FGxC7fV1+eiFc8A766niL59MIjtPJ7m9OxVfp8RAfSLYk5fmFUshELbU5yjmBSDwQzHSq4iIWe6jAOSmua6ceIfGttXrXbFAot5CzD0kfKJtDl1Lxgl8QMTivh5/WUFkYb5lqpslxl1YlHRF/mGNwvb8y00I/NtwRtm59pGeOr0+pbNeEr+ZVxMXuOiJBjaBrhZag21TTwQAK4Bs7lLr1EeBSXmZNJ1x/HMxcp43z5YNBvgjFiJcHHn7guX0E+wMKpttc++2VOPJT4qN5vb/Eu0mgv8S1CwMZScKt4c/cqlFay2U9QAwyPdjUpX2TXGYSbcJIy2kbrr6YMQOXUdBp0HGla+okqGqHtvrYnp2XWH7lM1Rx3vtlUZT/AGmIcvPw/rJMVNnKMo8iVsKYcNx5fDLQq8e+Ya6KI8XMhsojCeIVD0eu+ybD6Pw3EZ2gfljNCJS97T/EOSagWNuH0y3LQ6dNRt89/wDc4YeuGWnBWf8AzF0/Ff8AbHzFSq7ljKps33NtrbN8TieXEbotUdf5jb7Sz0HmC7OguVS8PL8RW6D1ADnbucj6jLT0EFOdka9R5BFXRAVdnLlJVxHuoKQ6RFDgH+IZVQemvf7wrlTXVTYLTK/n8zq8f7kox6jH9aoKMJW3BGDtFcNeCAo4AQrywuJgarg5jFWSu2vDCj0C7Gr28nXmDUTjfywaWcnhQlNnk+zqcBP/AIhQtdTlpt1BuxP/AGpoOkV8eIno9LoX5iqYfcpQKBz52OnEVfjII55hlcnyyl4UP9oGtqPIxukBriViqcsUXYqQOEGt+MjwUq+JR9QbTRZd/wDcClKrgdJuMpmm1Vhx0NnfcCngbLbV/udyycJtfc+k/wDeWZH9breuWdzqbLcXScETXyfuSnct14mcgc9kqg4AcRN0ABo33Ge6enm/L1UCsBRNcQLcdfgw4V2cOlM/BNdUhx/mWuhjySv2uVTn39XHVNPF88wVynfRDntSInkwC8aZ/wBEs/nuxwyhcv77YWPHdlxILff9oq2vxNuxg287dyqZLPNPE5PuWeDuJSxUoS5gysDNYuKadFqBvX8cXKoWDzVLTAmVeqcYSoKetg0ngv8AabEY/rWkuWhDSHTmINanYorTEOCLWpeHiKQvFLQptsBgpZGuiZwA3S7RTX5lxgV0ulhXuoqItsPbr6JxNdVKKDCFUsrQWohXm9LgsLeYXot5JTzUJS6m+urXzODfcXT9vb5iafW+0g6AeCLq2UFEu5O4ae2xNyIc30kzwgW6MLY+Ia4nIIEAITKVzEDSmcy6vZbR9XKjpyDZVtPRKg27PVD+IJl5UIIj+tmMehYTlIWZHDNv94IvVyuNqSFcYF/UI1Vv2wjfKIZWHcO6hqa7QstIRrpIc17H/wA8sCtVnfleZyuoWKjN40vtlDeow0ccZf7ckzlbx+Z0K3Dzc/tFS7+17KiL+6c4rS31K5w7xFP1cP7FSrf1FoIdxYG9lrNy9laiGBsuKvLqE1asUcTFPu4sHixW7zrGyWjmHQTFeNG0ynuftxNF71E6dMf1xLSEDnyscX2qKS2+4KHRSQmKAVb6m31aFbVxJgA5cXDhoG8gslXtn3ytUdaVXh6IuScq9xLT+Jou9Y1+biHMA0tXmcc1Oetlq+6Ei1cQtov/ADPNTyrOJSpSjt2wWrVcnLZ1zc2p6Fgp+ai7BSs12WsOdyLO+ZW5UzIk4o2fnuC8EqcSYBmnh4ahqgB7QJWOF7lEQ4A5yqYHtjPXTj+uJcIliSwHcjFQlVHbogkZwwpXdxtDViUcjg1/MBnd1jbeKjJOAtGZFZRXEOUZXx7iYl/EvuLZ1fHq5ZdS0GKx7jb5rQ/fubpQ8sPoziGgrUqm6/xGHIGtH5qooW4FF2/m5a0HcilFS0y4qqXxbF431o/kYdOBv933BN24qBTAr7Yxu3BHROh5le/icgwtaq91Okkvi5dKXZYz1M64ojgT10hKLeFZR5K4YF5bMvgvqOr04/rdQCpccJARyYN68nAVs0ik01UCEgXU9SmkVqr1R89Qyc3dXp7h3FrN7wqo4VcF59ylCWjol9W34Iko3Y4H8xgNZhdp7eid+tr/AHP+I5qF1DdPmrn1LKgj/gHpDetl1z+LioPRyP2VBQmJxEiKD0WkTCjoQlhGvJY/EnMOrSiw1ZKhwstOR8/ZAAtg16gSjggOHDCCqw1oe5qRla7lF3L4gjmv+ZTyFNLr6iFWDknMatsI2HpqJNgPKJh0L/Ec3UqgbX3E2bUBfr9c6joMtZ1Mi3DLQtvkaiBV1YHb0QfcGUbYB5tnU8srmnYboNC+LbAguLsNUTm4yyfAqU37RjEXZVns/wCIdoy0WnX7f8EPgiK6ntcJQJgN0rD0s0aAPL+42UtFBe3PkCKUOTqc8qTHsPqImiBQBTuXarGcaI7L49xkV3Rh5PMRQ7SQXbfdwPgiYAFRbV9Rq24L7m+lzC2wfQqCjfEb1DB8iqsmd5RZiPqDp8Gn9n1H6dlPHH66FsX8EbVQQOuE3EcS+EGjUU/EAEQRpURLce5cKvgWoNsfkmYwzk9NlhYquF8xtwUtTr9G7KywH3X8wpTisMyUE3gNw9DRlUEAw/BphXhfoioXqPwD8EscN8xssPMaGvwR6k7gN1axHjB/MVfzc1CjuWuKRSxpfUCVV1UoqDJU4l8pYPfCsCNrPUIgXgmyiymyrP1wgcSt7lKXLk5IC+o4vpYBnMWUTUgVFoKb5YN93p/M0MgoPki2t2cg9QqN8aQSWWaDFV2MBSv+CU7S/Npu2UxhhPQEyoZgFZZed6u2DF/TuEZ+aP5PXB7JjpL3KLpcZEycHHEpAK8scFwjIB1rLReMeMjNvNuwbbOVgfG0PVn7GXNp9zKifZKShrb56JSp8UP66qb+EoJq68zPQDMVx1hgp9FbFKJ3/MDOcvuoXICBI5MAirO2PtgF12ygifgzCnzUVFyy1W84Mt8rruoIdjN+CUPNSxFPBx9mH0+/7xKt98A/uZfCuP7NQb3FkpXDYpXwE5leaPMdwZyZ6hgqYmdQktlz9oL7OI67hiHm2ENNwzDR5m53VOXA74m4FV2VGlqeLmHx0XlV9GfrjslPPqVoweWFhXdgD+F2R1pYXwoMthTuo5U5uFBgDfqUCn9qnA7MWVpvTG2hl1DF3eYcXamY8So7C1jkI6eb0SlJDY7PLTYPVfmB+ViLSFHZ4T29Uw13K2WLl8w6B2pJco54jFxksNUpcB7qCcHMY5lxgaeODuP3SFSxUtqVUcK1Z2sbadACFOyL+q4LTARRqE0CiRpSLbAx1kaViMRVu/1tx+f3xnHcCY2pDspJxkeyUXIcxEUVLjYtBt+5Scqk762adO+OmZeYVfPcOf4g/OzKlyoYg2L7vlUpQFYqKDdPJx9sVL0jeLgd1KKT1WQzWlFRUK8HcuFAeGBYQ6tBavBC5QjS9RquSUThPjwhqF0VBJ7v9dSw85cYZdZF+cFQOMs3fmBfuxmwIooOdh6gAHYCoV+uH5+LHhuICk4pLokyCxiXl12U8KVw9XNqu+iNevjzEN58Cq6m9L77jYKRya/6IvGqcavkVsIiRAMc3i8IaFRSVhiN5cCxgsFvRLML2dQWHB9QLFI+GghsG6Xy2MKbFaNI1C9pocZEWZoeiNHjqoqKDnLhOExo4/8AXA3yPUwVVhsqP2iWIL1C6SMyWPIJOU/xG7Yhpp7UeTCbv9aIHjI1V0wVERaFTxkpPvYxlyn+SAeEbW7umMXIO/iN3zO0n2hW2KGDvDM/Iy6qI2uPEzmXMmci9N1e2NdyrBonMVkZ0vgxz4qxtfmPaF628Me3kwo2CIpx/mdwZk2H/wCuVTRzDyKRtdZswHyhg++ohBFVFqL+oj+0KVRTLV+jEuVMiyxoQThjo5u3DfufriEcj+yJtdEPiTcqcoilu0IFtzAjyQOI1S5BpUqIosGAPU3yTgbBlhxEprILcm+p0405OCmhugxZ3aBuUb3CCB0uxKUFFk403mAceY6G4QG+e4apVsJVPb8NFUEAYqC2mNxWwCWIzHt9h4g8kHq8iaNSz3OP6414JX4niIwNt9RULhbrDAsRu43rw3MIV90aK31L/ZmSnqaJj3AXaGW3lElMBp8ay8uElUnUV+AgRm7LlV1iXEHdcSsUbv8AcII/mUuuG6hp/mChFhpQX1CaeJcXZzMBn5lxYyARLq7mnEeEc9xiX7jBCqlW63DTg8v65Yj++TrPljmfEU/uVCoF02FGuhORP4EcK3sVXFX5irqMSMDu51KvxBiodrSUrlhrtASgvWalNnJVDzzceQ3tfr7l1o/xfnmX9X9dwtxXeXF/L3rAO8dRLTVp/PqJWq9S7nMNnFZsBd07KBVNgIgPf1LTVFa6+ANvzkQ02MBX1UF8vu4ZTy/f642NAH4ipclg8d5FYdy4CH0RBKPJBbwQta87BO5dymlc9y0j+PUoRnASrLJyhv6i3dRFIu+i2ICuLh3D0fkwtNFWf5l1K5o3+bZ3bv8AJghCwa7E19c3AOersz1RwRvK0WC1XNeYXaYLYbuVDJdV9xmDVwCDVq9Uwy3G4u98ysvDYU0O6Q9Rp+OQQs59dso9bUdJJ5ff64MLbO/jBV0ihLAErh5GKIi9rXMLBcmrwsVrnZwq7ngTSLAYXAEek4XEyu9vKn8TKzpK3eO7Jbo7m5wXrn8R5ay4IW/copvMTaD9pzHNX131Cr2YjZT5ibWh10efuUboIKpCUwXmAuO+a6hoahLo7ln7F9y3zCvtKPpaD5TWO0ihOD+WEBTuoru89w13x+vTNUrfkn5A4LpupzReITT0QimmZscSJyO4hZncsBfbUpRhyzyF3SNAb5xlaWUIin/UaBtgHidBuLdl4Lric2uwXXuWoFFNS1WJ5H/BC/JRC5X9xj/qWs8P/uXMEsHha57d5ljff40nJd/mBsFAuJV6bRElFMESPqDTCGnPEuxcoMopww8Bi17sfLBpzGxn4ssT1O4J3nvsgjLn3YP3f8s/Q0EoI/EW4QMV6ETkNdkqIwqepVAMTW88M0s0evENfZE5LlVtiAaUgrPHEoq9E9yro9DNRPwbBPT1AuR9sVVQFwVR6qvuUOyg7HSvdUX/AHiVtVdE2vukosMrujLlVItO3N9E1sPPxUeOqgAXNZyT2zXcXSBbDs9JNdA3OIlo4qv2OYycvg/9w7F0fsxqYtI6k9J3nX+vj5TF++hOPilvlMQVcxhU5lDS2xA3LHi2Bwv6jBES7g0TMCXKemRJQO/5hy/ZZQPA8Q3rMZqv/twfvVb2/wDUILwHmOG2hztr1s2U7xxUQFWGbUR5tuIblDi9ksy5o15jvcK7FpELPLsZe6+SVtFtrXp/skA071bx9Q2aEar+8WJzVB7/ADOexcu8IV+v1bDJBqQFeJlKJBDpsu3PL1wxS1kr7TJ+f4i7GQQL6mYBDpzB0oZqHmeZq4LU6TOG3+IX58X1xL2P26Soi34GKFtvF/MpCGv5v+ZcrTzF1o2HhiGDeR+1Roqr5kQU98MLR/IaRhi+8HUibrC3CjZN6eyOCfb+TL/bYcrQoH77awFu1lOeI6AWseoBC3uOXoA/oBltCeBIJpNPTGQLKMaIx3BIG/vdxlJFKO7lHHGSjZDXVIlZR9RKDXDqWLVrz4I/HPiXYWZcfcSOptoy2U9D2XNflRNwBroggO6/iKfgvjzB4nnojlKn7iV8P56h1py23IEO+vcvUGrhrnq1UEkIt5blw5ZKVF5ebtXi+vqUD7LKhQci/Vzps0z/ANiTqx2XA8Fz36v6BtIsWBxvnsQE52EGcpARtMdHpgNE/MswUFOSUI7hXNVM8ldR0Qw28hTjnwzDQihemrhApHiKIeyxHOsjTYIf3+iUK8E7uXzCyAUS6KDv6hC8K7hDXsPhy1hiDzNwUXC3rgCChO0UvGyKA+0H5l0pC+P2nZCqywquwPE/0HN3KXUvVbDLyHlj6jhpwfZA0DtcRgrfINAhmZEF+kaCrruCY1cHNwtG+YU8nUOyfRfUYXZXPuXOdREq9wFwyrfxKh+mXXMWouwLMhWA/NdxrRdrVnfWx3u829XCVKq9lp39VErdEq5Ymh3Vn1C3xrk8hGP7fvDx6ah7IqX1PK4lej/nP6K6+6O35EBngSmFJMrUhlpzSVyn3ODwlwhLXEW2oy+YQEIU6MehgroIL/ELrbiDThrG6KPuXlw288yxdHLKq1yGwgXnGXnrU+7lJSgWJFUsJbPEMPF/j8xi1qMFOKvO0vzXiaaEp+7+p3ODzs9PEapUdsI/i39/6DutgNXkwKlYAbyLyBDXSUJkXY91ADI6LemWioN8rfTEo9JCq3iEymMPyO4lw96PcAHPUt+6Kd5q/om0hm7F0oqybHgCv+2U8UYV0dSwAaa+JlM2lxeO18Id32bHM1VZc+D0ymCbGuqm7cKiocFpONjF+Qp4XAV1Yz2eZwRmis+vE8d2D6P6D4QQXoqAhBluiEqUQdqVUQL5HPqDHfxEGFj2MH+XlgcLM2sBoz0bE6qG5uHBChFvRsrc4ym22LsFUFhzr59zzweXr/2cKuRS/fUdGcjp56RmGXFRtsNvcMmAUYvBAe6QO8EqK2UjCuRY2J2kvBaRFIN7VeUOoYA4kvBMVfcVVX9dr/WBmQQ0y7JbU7J0wIE8EYHJyPqI2ofEIGCyhwe6ldCoINfVRoslrhQttrdyNPco6il0g8fZxX6g7jV29XUqrP0RJEQqyw34tp2uESu/mVLFhvaae/BFeEOhHS06425UBXOyqsblj3C2of4SYlQ6TovuVit+2Va7Y/R8Z/QaEEoFQsIScIcx7aM52HMRgGhvXWbCp7Ze9Lvhg2Q5bLeiYoWpsIoIh0ab2X8EFbpwQGyR/fNcZlAPMv67R3Vf3ApF4QFUuqhd25FRvky/05e2IvoNr1AtHXl7lgHjX68ERCSq7lTZ8t5HY5EGV3TELfT/AKEYU+Q4lq92+BrqPA+CjlLpUUTlPqVeRMNF3rKhcAslE4t7iJtLbqOAAFcwr3B5hDnaj5LiUFVcR6NpVxQ0pgHfEjzlVGa/UU9HsdmW1Nh8sqvRXuLU0HCRHRS01h1wShEWJdXXvkN18QNGGCU1FK48mQhzctJysVPlF/P9BhtYR+ZtJFflY0Z211LBLHECVGmEnfUMYCltkta68RytK8Sy0GdwS9ZteY8fHNTkdwyBtnUeO3/iUXcfamS7q4Vsos6iiRAxiG4FsfzKoERXpb14oItqgi7HTte10QFEZzQ9FnHuDuyY9UJENY8D2GfvL5MIPsKS8vcH3AipdnFRxgDB3lWMWzop7uLhtQJtKqo/YA/RM/oO+CyvBI6IqhYw0Wu3Vja0ORhSREbJdjKUF+YNd9x/S2OTZm+x9Mpye6uUbphwD+DZzCd1NAPwAeJU2rrmAggquJyIFdiJu+Hf4qKkSygppXZfcYoHJWD1Up5Y2rfwPEBcSA/O8yZLBOfsYbdYXrfcr2bID1f58y1bqboR4RrphbLt19f+xpEwojr+I/oMFwIu/wBScISriHDqOSV5OgcfmPGTMG+Kvh4Y9GJZQ7uM+oklmVKWe+9lidjeVERZRVc1GxYbd0yBxdXHNb9QN0q9diobpuEgO+fTEbrtl+OfWQMIe8Zv3CHBkrbo9/5mbZjhE0F8rbMxZXPEBSuRuTzywv8AvgZd3f8Azj9EdFyAXkUD8wsU1WZhDj4QmRNI2Je3/SEukpORxIJQHHGPQy4+ornuFfqfjucaQHbEG+46sajaj+GVOK+HwMq6z21MXqUeZVa3qIW0x7Os3D3Ko9Db7gUIhULLlsH/AD4/Q3KBMQ6yA19QNihfMQmQh8pct/WDv7gNnQ9P1PaCiYyMZSoNMLHh4ZUCOx3t/cMwdhpVXKPE8AnLHqKYsx4eJrvJtIWuQl9mEvNTNRRw6lVe5agvtgHXgL/EXp1/Aw/oKlTRPgYWViUxI3hkY7MS4f6KgcUZkl99/aNttwMGx9uyXuu9nwk0hafUaZqM6jLe3MYYrlY7S5jOU2VpdEtofhBVVsJWpXmK3dMYrnw+vioIEDD+T+gjAHbK8IWM7j5RLYWUHa2QPm1Z9GATG5fxfwqCxgZvZwgCJ+1Hx10RJwBCaMUqoyoeufMAZ8BWZFdjYheIa9eo/jHG4z4EBCru1yDWG9xtS8XV9/AKN1g010XDvQyvj8WZJfzB+Z/oKy/gmiVXcJcKviWZNsSN4kfpvDnEHOcrj0/N/AuNig9gmh/EeUdV5hUpj/aMX94HphHInHMSyMYCjblB1A9eeYDwSq7ZUAQrpW+WrEKjuUEcLjfzSX3ZyqN4pRHwwadBGZ3p9df0CCoEEH7zjuLPKCYZFssHOkYNJ8jT9kB9TqZ7Tfwx+CWNSMVGJt5zsqaQDVH+fjfcFm6JjDBdfiIZdkLwaMhUl8iMlkdX0ZRarY+iG3K2WYqhAsK4oK4YEYH65qb9T/sOf6CplwSoUe4hVzhU4VB6nKYHE9kY/UrBpGPXvGUvjWDYkYYuLCUSV+O+Bao+XDXIqezerDiqU1dR8XuOf5QEsZTcl7w8yic1KVH4RgXQ68yoqbjaSi6/ebF9/mM9qCOwhksx/Zjv+gUQHL8MXwmiKu5a4oTogepraMCpa2VxOQpGVxGJVd+faRim3yvDFixWOExpToHJGLXqOGFbau5ZxR2RMauHpi0PKCaolduywyVyrj2hWUMnTHcsYzr74qY8cZGN/jv2P6CvV/iOQ5lNfgeYzCyWriXGDAH2xHEvbn0g7Le/DD5RNeVFy/jPiCCOdBhIPedwNj4zrQFT6Kl/HqHdbbiBv3PfPZ1GjYZJff2hcAAcumEj3Wug+ogRVbV/Qj9A8SIMFEEtF1+o9k4Q1jzsR31B8Sh9xE5iFpEdq/CeGCmG+/3AEnUcVDGQ0bXKh136wGtF1Qi1KmIdkplGjx1WIoGiKarmaxuVDZ4OYXDX0Q1/zsvbKXhh/QdtH9ErSVA6/Qi9XT5RsdqNwZSrvZ/hOLLSQUFi8VLQKIkyIK+ohC9RtFJA+Nj1AGMeVwUvjdcKmOs8wiFHQ9MY9wZ8A9SkyXm5CPV9UDF/oMFchU3fEEnDPbZu99JKi394jZ1kaxOXsSPcYvAMGb8FKbcmchLHRFyOKNrCwNIwIPh6pIIw6ubMCO3NGbZOjkZc8p9TFi5S2Quqo1mQSIaVKOK3/J/QnXfUQgQhbvmUepRoJnAfFHpIFabM6MAiFkR3Hglv3HbUFqeddwtwRSa8xojXKXNIjiRzSgpv4MAQRtleO5eWyuFCGJ/EYGozsS9KAl+O0ILw/wBBlNcICGXSy6gNEOWoYmFVX5guAPFnUtQv+x9yn86e/pCol9GUU7HJd3R1sGDVwRhy9S72WoXEqY0lg8xIRERGD9CpuBK0QXiOiYrBbNJd8CXiK2Z5GvFE/JYHWKRneXP6BQxx3DBOHnJ2HMBt7MLWtyWEipQv38ZDfq18HmBcgd8vtjJxU0Ap+GdIOzsncvpFuMS9SIDZdQwh7ZgWdx3ggHMV1sFiBsTKqCOB68Yer+JUb4kRg3NMfDFxY68ktTuEmu4SniCErK/0ANDlZWu+5UUDcFujm4sXODRUWtJSxtwio4uzDzEa3kf4+pwQAe2OKD7Jbufs6ZTgqvsIl4OoOSvZBlsQ8wcqtjkEKXkvlQKSvMXfSPjGQ6SBxBz/AHkNIW9w3CWJBKJE47UHqlYi0JWjzHMObI/rwKgQwRFrgljj0gPH3FEwpvZj+di0Px+Yii3LEbyhjYx4yw7Ys4TxG73djFA7YWiUnIOnmIsD+CM66tU8EbomKXKP25lXa7ZexXMJhvupY/AhNtiQyoDr/KS0g3EI+kYMZ6uydkcgRKfhiV2mL/XavJUAbLY6gLNG50r3ruY4tQFY8wKUlmLE8B7n0VW/X/bEAUwODgIqlNp09MK9bEN3ufsIOjnqJxXseYqAlOL0gKcRBxo7Oh5IB21DPzNBCb2gTm+AIbHWPueUiTQOnQ8M3PVXeoKRXOoIwZ9hTAcV6uaiAxdy/wAq39dXB+iJQJjFVsu8hRLbqE5O72FoWd6xxxkAGlaA8sJ1vK8sUzai9xtMogIK/NTV8G/2jn5mp9oRs5g1rh0gHq7PDMxG7l9o2cabgINxbJTesbRvOw2haliiPTDHEYpajykPIOxIcILfAQybIsmSXJcqeuUR6GJX63k4eiIDjJSh59SrW+O5Ypa64i5C51493NZ1xEPHUdD5P2h00OT/ACZSHydZS+La8xw9dQpcq4m4hO88Dsu7Bu1SRE9dZQORCsOMu4IqqRaKi0dlTPEUSYfJc+0CoqYV12+3mFEQWJBZX3PZBmhvipkX3zRoNdhK6LKNacjT+tOwsvCHTATXMCp3+IpHxxzOX4iWvcvVPU4Fkouw30eYA4AKl9rOp5DuU7Hh8E7Raif2hcgHsgGnfMIF8+ZVkYT5YGcIkIDtEQV3tv4jZt8w4LqJZ67nWEdoGDVkbjKH0Tf2lWDXxpCf4Ris21OJWQjuTMfjcHf6wgLhDCuAiqMgO0Fg57YkPW1GHHGPqzCKvWR1/hEsfZG044nYWSo3bChigb1K6fdwpncGzVGPeT6en3GyeiLcUhzmwuKcTtqCuPClV5a0QPezzKINd/cB1Czqayy+IvSI2PiHT076+YWggFw6DO1VQUdvg5gElDD5olP6Ef8AEYBx2wQcRKTHiVLs2xv2jE27FwWReESpgQJi+oeJYNgkPUpXXIbYsa4SNhobPaDV3KtPMu+cYqeQxMJ1AjYBTsc/EHhCZhBqUSu3mChUXeMvIazNg4ep3LqaE0PfpjYGKgUnEDfH8xloMBQENEsG9MrY1Z+qgByzzt3C0drJSCcER27aJRGJQEBquSVFlm+TPcse43BLqglr1EUisaUOIr1s4Payl/iK+Se0atjlQQ0bLulaMo3cCVTKF9Rp3coepmLNFhBTHSMCS2/zB2NyyX8BpVA85B+hKI9PPTypdSYoH4ITWxCQ6vqM65GpxCzu/VKhyPH1Cs+5lso8ShvayBvMHi5nUilghy2NhkUg8spBwRoICtI7HzY10l8YgIYwqFl/DZ1Lc8lxQ5mOPMtHQ9SlAeSoamUTVmAsDSXXUdRmvFw9kVSs4NYt3HDabe6bZ8f2zH5xf3CcMshSV5InjxUzAiU/oB/wtZ4S6oE4msqJhmLgge3uIEVjbggWriQb3JhKKyVYQJSMvIqowQxKSrLuc8Eb8Z2Shx3Du4y2qfMs8SlTKx1NZELiy4VhcXYAQVChLGpxxB1iWQF/BVZd3E1i5HW4po+kZQ/UV8vdQrIJrfhQx0v9RC0CF+/fcp65qay8oJWMeCC4Qt2VAeIKIqFiVlFbnGNQEdp4PMHUVwJLIG0WNkuZV9y1ZfksjDj6hBEn51zLK1/7hljC2CEpV1HUJw8y2bKt+D7RDYzH66ln9pu68RBfw/CfIRFf05FTLyolP6haszhfmHi+5va7gd3c7Y6ysibmQUYEMoIaiZsGpYGQ5i5M3O4rZkbAkuGkMEV7JSRxKLhFzIt0WRUYKsDyRO7VlME2gWzJYKWoX1dQ7g0TzUDqHPxcSyK/ZExsC6cSwkJQ12QJRMRhpTX4mbdk4OZbxXy/F4lln6eCoHMxPhbXmBpDGZ0soCovJY4mEAcbKIFu2ACLgTFQCo7i1FsltIbplhBAijDohNLFs+DmpQnSUnKGLLZfBN7g9Ji0ZEXR4jgHmFRBKbnPPjy3B3Jv5loiM44qH+5W26zCA1s8qFIyrgS9wQAOx1+eiJ3+nBa41F0euI4z6gYCxFyzUvOkxD6ittZjuVuOItIyFYbi7uWwiwnNwan2giKtJOA4lWNmzqIIu5YFMF6llPTcXcFODZyK+4KrjzHRwxBpZmXU1KgR3fjDzLuUR9RbPxHUPjXMuG5cpRMCjgyOG3lcL4hT4YYX6cUV4usystPHUIWsSt4dEARVOw5fAhENcbg5XNIr4gqNihnxUgFqDjM1lAIF+CiG5WyyUJzOpSqjm8sJKGcM1cO+UxxZT0xzsl8VxElkXgqDCbcbVLjKFJfsQy6xzCVnId5s2V35jA6W4Py8L/TPEl79SgK+5tyqhauC2JnUHlF9R2a5cFyooFkG2Jc10sw8ywFStjE5sekHwuiWRs0QoIwJUBYFmatQ1l1F2KeITRKi7IjkaW4CwqUMlQjPixIhumaNHYD8GAdaxyFTBS1LPM4eae8I8o/YSgsD7YAJyTRSDFUuiqf0vFigAdXfolOfzLVHBAJYDLXuJmpcudMKqZcBOVnEtHRFycCWuHCTRHcFcGAtfAJBgs9wgzIOQ2JWzHHxUteu4gH6lVoWSnPHAypzvc1w/AwgWOLU85AruUsYl/yy85U9YRZ4KY4NLUQlZCErjpf6UCoHK1BPwMgLutisSggBduxLog1kNOQvRl5VfCtpDPMCRXDpcv7ivmN0QKleoCRyWCckajTUuDBezhhVwxitwSDiTEipyGkg0e2fibbduNUze3zKJOcE0V1DAeoLmHXcIi3E34Aom+1LvKfsQ7N+6IBAOJeINGNjCKmWlMcf0n1CHMA3+0sF+p2Mt8RtU13CyHKZFN1AqNXdTnEO0QrmOESpepDGAtRcwGRICcyB6jb+MIOCCnuU0S9jdXFLgtQ5jGvE7INQQEFyTYIQ3uVp/EIFwHURYQXAVHicxRPBuvLHbS39RVWgv8y9NYxSQhHGOl/pJjbrrChZ5bjz/CW5gpmnwU2UcswwyPJLSIsnRsThG5iAmcUMADSZR4xEi9x7XwEZc5kfzELZNFRqpZLmR7mGfkl1KHUW+iK66iQCg2JXKtpsbyZ9xsg8MSC3CBcY8N+iUAWHo1htlS1pEpgwZeVcw/o7+4gCclQCPMReRWSwF1Msi6i2ERe4CsxWwUQouZ4lUGFiF4zAjzEbRZU1E1EhAi78E7gxIEToxZEqc3BNgo9pTGpZeS/gI0XFUsyjoGINgVLhepR3C+5mdlfRL1Z6Gs0cV9wI7wqEJUxoH9H3eMo67KWsu4romWxAwCzBIXDeYUQIQgYyNIWhwke8xtLpIPmo3WLFuRqqJjcxNMsuOyoQUNgssUinx3B27m1G9IXDFjbCU5HcMJ7yNJL0kEGMrlBqInU0cSmFxiTqKCZfRzDfD+WXuMZWpwwgtyykFP6Nd/MKaYnETxMte5a+YukvynBFtrO4YzTM4WCpRo7jk55yll5irWyxHEsCDDjCo9fGEYrctjibHwX7isjdwL4YE7Z7lNtMO5bdJC6lnZ+Yh5mH10wLHVRU8RcJd1LoqJd7xO49rlLnIcYnw9OWBTn7wFwaYQlwmB/RRQO2oGAYZBfEtlxElE9opmwahT3L9xYxoxVy2oArYKZdmIFuyxv4jCOCUx/MUvxfxzKJREMmupRCNruKxRmIru5corHfEE1YsZRcfgVpl3Bc7OINO+5hPMaqK3f5RF+K2X7hiIdPbcutVe2BJSoQYNMupcSn9Evv4XDLblA2NI05lpQbLMvSFRpbDUlxN5yZVkHywF8SgqJdSh8HmjI1O5ZLP9G/AuVdQXUiZH3Bisnuom/Crak2Hez8wR7g3Ky7v/EvK3fc5FBLZReIqjKVBIlmhA86/L8JUowwgypmwT9Eqfk/wQFoTFYQS/hFYfGQ2agfEFysUFlXAMDxDUayFMBcBcrv4Qcn4GuWrLZaEU2ARYJGJUuoMN4EZORL+A8z8Rol1VSuocVOTvmXsFtO7iilYzgOOpePENFEPXmJGpscK5g97wvLcqt5b3FSVyWRkwYTERTNP0K4IJMEw7g1DQ4jbctgnWZQoRD8JyChUruVbiBnwsHiJtAPgtqPwZKlTLfivhZcuDkoScjphFkIxuNTExPtE3mXk1WApbkz6e5o5LQ76mzNKWOlkvIGKINM1dCPKq9sHYuYu45ChKGDb/Qqj7llJUzlVRBA9ysFlFyt1OdscHYQV7AIOlRvmGw4+AohqaRbjZ+Q1CosX44X4bmV8BcCbPqXEEho+BRWLeEILKbg5VQD2UzYdJ1Bb9y6i4WyjP5ilKe1EuGLMzxHYkwLdUrD42ajKGpIdiiuOowX9C+oFfvAdXBgJVVE6fMB4lqEtK0YxB5PhHwpFaEt8Ti0RDIFcxmKYSz4K9SpUYuEWLG4GQlwjQnmWQYVUEinUPcsOSPKe7n0ncteoMdXXphTARVFUlaEKyZVC3MMu8qYZasALJv7rLcsyZLA+HBlxUFL+gEM9jcFWlLlq4gFWkAXSX18Bs5qLdxN+BuEBcW8S8ijIQ/BbFv42hwATpiwCJsdjGPy4/DDDr5+AZSiCc9SozmbxNeUjWyzx3Kku6olvUxOYFxzNm5swKZBDMuKPyMJ1LYwD6wrw0w+KgQf8d/2mAY0RsBc7g0Zoi+ICvwUQxFtiaRg01OZyi5l1KmPuxGLfwaJWwQNTqURjzESM6+LhmxYQmw+ICQgwWZls68zZQqOVC+Ivkha7PpFZ9S/BP2lX1KsmMfmnEMe0keJUVMsozSFyQyKWu7mzCKcUuHf/PNg+ZgfMb3uApfMsiO5QWaYsiy6lhBXzEEIrCke38VZL4kGVsDkKUTKmXOcvOZW4tsSURjEybDr4TA6j6l6QYPvYbBSjzFoTDYiYkbnJkpowYMhRwwq9sRkNyhRRp4j0kRIRMmrUQ04MgtRzEJXwRZLiph/5/K+CErERFrK2gQUDEEoMirBA2W64hDusG7YxZnEqGwJewINhyhgEwWLsaWNRYu/F0fGRj8EOYHuDF8KFVHi4J/Euu+oipnJ9k/Mv+YPvmCS9JwtC9hGyqbZRO6jdtxbA0UjTLX6iq1HmEJQIDH/AJ+B+aJzSj9XFXE4FiyezFbLZdEFcgOGIRZSRSUMQmUWdwJZKIFkOxqo0xjMR+b+L0jsY3O5eGg+YMGEDGRtI1VzYDbMJbxLnaXdFwdIFThLFOGcgxilyu2No6hE00QATF+csBh18Okl0f8APyvbK2/U5pEQtRt2cT2srZEQRg1ElUQOJcIzSWRYwL+Cn4CyBKsio5FfCoxWPxxLyVxE+OUFwEGKDBCJnbLG+T4zbiQ9sFefUF1naTHATfPcsSIwyyjyRFFMjKqJ4Rl3vkgn2lHhCHJHf/PF4pzHkXqLrDaMCyA4VCKNTdgGqI0mxfJADn5vSLcqYfAKKgQyiEv4WuKom5XuMqdTuV7+BIpIlTbmlCDBg6QYXtMElWQqETn5E9TJzMZcNlxSNK6Dux2DFtuwIUsEGE6IaX/OFMvmLcttLyPUoxepsClkIwOWGI3HKSohU78xzAv4RygfBwIFkojzNGIsexwhpCMy5cfjqKG3BUT8UPgYMIMS4Ycy250S3qdzolrFld/BV5l+pVKTmWsvyGl3FPij6QrUywcwlxVGkf8AneFMIxe9wIAyZMScsYEPxCL3F8Gz4bgIcARr4CVCqllS5SKmNF2cv+hrYxlwWEFi2ZHhJ38HPwMEgy7IXpFi5I7K8RA7i8sKl2ZUPsisC05IoTQ6jLnr5hidktTHlCEdMdP+87Vv3chyafub/vlYMt9Ra425QOYNlLYMy5cA8Qa+MctuK53D5eFMErfioqYI18AgS/gl7Lz55fg4ly4ERTl+4Q+Bn9j5GmBWMu4zUfh3qAVK0tiuZExIzTCljxdzB4gozWO/BvJBhCO/90wGqDlYJymj2+D0RbcPyjw+mOAbScj/ALyspbBxhct4gCGmWJNgzzvhufgX4IzAgBERnVge4Co8RaOY1xW/InEy9ixZbDmXCL2KQqDcwHuHyQ+BqdS7N6lvmIXcuUzu76+BKrufmpfiNDVS8eHwhoNwRQMJeolV9QU/cIQjsjz/ALbqsvW/jlHqalch9Hg+cpSVzD0+SPqm43fzy/3Vj8yyk0xjfMUi4EsQAOTqNJX8TS2BOL4zipZUuCGWhhFuHDfyFwW4M1j8J8sr4pgMVP8ApR8LzmHwKRGP3M8d/A+42n5hCowi9RCENvx3dotRuCphexFc9wYMGOc/9t0V3O7+/M2lJfMPZ5Pk6O4vkPt8EdF16388v90tKOoKDHRFEdMgRSoATfmW/EsIPhsEGiJc7l2QQU/AAzOXMUt+AfFZGP8Ao4jLYLfznwQgwi2WwbSayiGMwl5FbuFdSxh8EvjonfiV28yll5KDBFTbdFS9Qh8KdH/ccA2w5GHahT7Hk9MW5TZ7fL6I4Btpyv8AvPBF9iFnEywIUVEXOohMZ7jqGwfCUSvhaYFsCbC1OMD4kRZUECVGMZx8dSmVGb8cXwfGfB8DsUudEqAp8IgXBphARauEKJnwrHqBTP74SksIQjqNf7o7NP3Jhyrfu5/vlUVX7mMQjqXRCMPza/0BUy26iqhdc/DWEUqWh8Hh+BZfwEp8lj8k5fhIk7+Y+S4QYXBeIPEGp3z8PMt+NYdwyG5YJGERRmEdnpa18KIfDphv/NjSMx+8sa+onmLFzmQ92bRYtxPkqiBEYbuBAbhuN1B+JfgUWHwII38jNmw3/RUSKT5JcP8ARfqHw5U5uVg+5R5lyyDcqD3FsgaZaR1uVCdMX1MP9DX/ADlhcdncdMsJcQR84r8b8wDxKiwnbYKCgjEQ5qxx+AgECESWqL/qXsVS5wnLD5z4z4HD4qePh5+epZOatgy7bmeWGsFMMSISXs1iO4MIcxlR5/5uxz+mMs53xOKLA2DZvBSAkbv4C2CCyA4wEFREcXyEEMVkSpeJ/oIfFtwgxnJD/UfGwdhdxPmmibNOoWQyWwGRKJYR7EQympZ8qD+9D4I48/FPxXxT/pr1/sA2ZP/Z";

        
        const extraTranslations = {
        "en": {
                "aboutTitle": "Who is CareVia?",
                "aboutSub": "A clearer presentation of the project, the mission, and how caregiver selection works.",
                "aboutCard1Title": "What is CareVia?",
                "aboutCard1Desc": "CareVia is a local elderly-care booking concept designed to help families find reassuring home support more easily.",
                "aboutCard2Title": "Why we built it",
                "aboutCard2Desc": "The goal is to make elder care feel more human, more organized, and easier to understand from the first visit.",
                "aboutCard3Title": "Our value",
                "aboutCard3Desc": "We focus on clarity, respectful presentation, and a calmer booking journey for families.",
                "aboutCard4Title": "How caregivers are presented",
                "aboutCard4Desc": "Profiles are shown with practical details, service fit, ratings, and an easier side-by-side comparison.",
                "pricingTitle": "Clearer pricing",
                "pricingSub": "Families can now understand the starting prices and the pricing rules before they continue booking.",
                "priceStartingFrom": "Starting from",
                "pricingMinHours": "Minimum booking",
                "pricingHourly": "Hourly rate",
                "pricingTravel": "Travel fee",
                "pricingTravelIncluded": "Calculated by city",
                "pricingNightWeekend": "Night / weekend",
                "pricingNote": "The live estimate updates during booking. Final confirmation may vary depending on the selected city, late hours, weekend timing, or accompaniment between cities.",
                "testimonialsTitle": "What families say",
                "testimonialsSub": "Short testimonials help the service feel more real, local, and trustworthy.",
                "testimonial1": "The booking steps felt simple, and the caregiver profile was clear enough for our family to decide quickly.",
                "testimonial2": "I liked seeing the hours and estimated total before finishing the request. It made the service feel more transparent.",
                "testimonial3": "The interface is calm and easy to use on phone, which matters a lot when booking for a parent or grandparent.",
                "legalTitle": "Legal & policy pages",
                "legalSub": "Essential pages that make the project feel more serious and trustworthy.",
                "privacyTitle": "Privacy Policy",
                "privacyCardDesc": "How contact details and booking information are handled.",
                "termsTitle": "Terms of Service",
                "termsCardDesc": "The basic service conditions, booking logic, and family responsibilities.",
                "cancellationTitle": "Cancellation Policy",
                "disclaimerTitle": "Disclaimer",
                "disclaimerIntro": "Please read the following disclaimer carefully before using CareVia services.",
                "disclaimerInfoTitle": "Information Accuracy",
                "disclaimerInfoText": "Information on this platform is provided for general informational purposes only. CareVia strives to ensure accuracy but does not guarantee completeness or up-to-date content at all times.",
                "disclaimerLiabilityTitle": "Limitation of Liability",
                "disclaimerLiabilityText": "CareVia is not liable for any direct or indirect damages that may arise from the use of the platform or services provided by caregivers.",
                "disclaimerCareTitle": "Nature of Service",
                "disclaimerCareText": "CareVia acts as an intermediary connecting families with qualified caregivers and does not replace medical advice or specialized nursing care.",
                "disclaimerUserTitle": "User Responsibility",
                "disclaimerUserText": "Users are responsible for verifying the suitability of the service for their needs and for providing accurate and complete information when booking.",
                "cancellationCardDesc": "Simple cancellation and rescheduling rules families can understand fast.",
                "faqTitle": "Frequently asked questions",
                "faq1q": "Is the service available across Morocco?",
                "faq1a": "Yes. CareVia accepts requests across Morocco, depending on city coverage, schedule, and caregiver availability.",
                "faq2q": "How does booking confirmation happen?",
                "faq2a": "After the request is submitted, the family receives a confirmation summary and is contacted to validate the details and next step.",
                "faq3q": "Can I change the date or time later?",
                "faq3a": "Yes, changes can be requested before the visit is finalized, depending on caregiver availability.",
                "faq4q": "Can I request the same caregiver again?",
                "faq4a": "Yes, repeated requests for the same caregiver can be reviewed when the schedule allows it.",
                "faq5q": "How early should I book?",
                "faq5a": "For the best availability, families should ideally book in advance, especially for evenings, weekends, and accompaniment requests.",
                "faq6q": "Is there cancellation or refund handling?",
                "faq6a": "Yes. The cancellation page explains how rescheduling, cancellation timing, and refund review can work.",
                "benefit1Title": "Caregivers selected with care",
                "benefit1Desc": "Profiles are presented in a more reassuring way to help families compare and choose better.",
                "benefit2Title": "Clear profiles",
                "benefit2Desc": "Important details are easier to understand before the final confirmation step.",
                "benefit3Title": "Easy booking flow",
                "benefit3Desc": "The process stays simple from service choice to confirmation and follow-up.",
                "benefit4Title": "Fast support path",
                "benefit4Desc": "The booking flow is designed to make family follow-up and next contact feel quicker.",
                "softBadge1": "Carefully selected",
                "softBadge2": "Clear profiles",
                "softBadge3": "Respect for privacy",
                "orderNumberLabel": "Order number",
                "nextStepTitle": "What happens next?",
                "nextStepText": "Your request will be reviewed and you will be contacted to confirm the caregiver, timing, and follow-up details.",
                "backHome": "Back to home",
                "privacyIntro": "We only collect the booking details needed to review the request, contact the family, and organize the service.",
                "policyCollectedTitle": "What may be collected",
                "policyCollectedText": "Client name, contact details, city, selected service, date, hours, and caregiver preference.",
                "policyUseTitle": "How it is used",
                "policyUseText": "To confirm the request, prepare follow-up, and keep the family informed about the booking.",
                "policyShareTitle": "Sharing",
                "policyShareText": "Information should only be shared when necessary for service coordination and not for unrelated marketing.",
                "termsIntro": "These terms explain the basic booking flow, the family’s responsibility to provide correct information, and the review nature of each request.",
                "termsBookingTitle": "Booking flow",
                "termsBookingText": "A booking request is submitted first, then reviewed and confirmed with the family.",
                "termsAccuracyTitle": "Information accuracy",
                "termsAccuracyText": "Families should provide accurate client details, phone number, city, and schedule preference.",
                "termsAvailabilityTitle": "Availability",
                "termsAvailabilityText": "Caregiver choice and timing depend on availability and final coordination.",
                "cancellationIntro": "This page explains how cancellation, rescheduling, and refund review may work.",
                "cancelEarlyTitle": "Early cancellation",
                "cancelEarlyText": "Requests canceled early can be reviewed for easier rescheduling.",
                "cancelLateTitle": "Late changes",
                "cancelLateText": "Late changes may depend on caregiver availability and already reserved time.",
                "cancelRefundTitle": "Refund review",
                "cancelRefundText": "Any refund handling should be reviewed according to the timing and the service status.",
                "liveEstimateFees": "Extra fees",
                "liveEstimateNight": "Night fee",
                "liveEstimateWeekend": "Weekend fee",
                "liveEstimateTravel": "Travel fee",
                "liveEstimateStartingFrom": "Starting from",
                "liveEstimateMinHours": "Min. booking"
        },
        "fr": {
                "aboutTitle": "Qui est CareVia ?",
                "aboutSub": "Une présentation plus claire du projet, de la mission et de la manière dont les profils sont affichés.",
                "aboutCard1Title": "Qu’est-ce que CareVia ?",
                "aboutCard1Desc": "CareVia est un concept local de réservation d’aide à domicile pour personnes âgées, pensé pour rassurer les familles.",
                "aboutCard2Title": "Pourquoi ce projet",
                "aboutCard2Desc": "L’objectif est de rendre l’accompagnement des seniors plus humain, plus organisé et plus simple à comprendre dès la première visite.",
                "aboutCard3Title": "Notre valeur",
                "aboutCard3Desc": "Nous misons sur la clarté, une présentation respectueuse et un parcours de réservation plus calme pour les familles.",
                "aboutCard4Title": "Comment les profils sont présentés",
                "aboutCard4Desc": "Les profils affichent des détails utiles, l’adéquation au service, les avis et une comparaison plus facile.",
                "pricingTitle": "Tarifs plus clairs",
                "pricingSub": "Les familles comprennent mieux les prix de départ et les règles tarifaires avant de continuer la réservation.",
                "priceStartingFrom": "À partir de",
                "pricingMinHours": "Réservation minimale",
                "pricingHourly": "Tarif horaire",
                "pricingTravel": "Frais de déplacement",
                "pricingTravelIncluded": "Calculé selon la ville",
                "pricingNightWeekend": "Nuit / week-end",
                "pricingNote": "L’estimation se met à jour pendant la réservation. La confirmation finale peut varier selon la ville choisie, les heures tardives, le week-end ou un accompagnement entre villes.",
                "testimonialsTitle": "Avis des familles",
                "testimonialsSub": "De courts témoignages rendent le service plus réel, plus local et plus crédible.",
                "testimonial1": "Les étapes étaient simples et le profil du caregiver était assez clair pour que notre famille décide rapidement.",
                "testimonial2": "J’ai apprécié de voir les heures et le total estimé avant de terminer la demande. C’est plus transparent.",
                "testimonial3": "L’interface est calme et facile à utiliser sur téléphone, ce qui compte beaucoup pour réserver pour un parent ou un grand-parent.",
                "legalTitle": "Pages légales et politiques",
                "legalSub": "Des pages essentielles pour rendre le projet plus sérieux et plus crédible.",
                "privacyTitle": "Politique de confidentialité",
                "privacyCardDesc": "Comment les coordonnées et les informations de réservation sont traitées.",
                "termsTitle": "Conditions de service",
                "termsCardDesc": "Les conditions de base du service, la logique de réservation et les responsabilités de la famille.",
                "cancellationTitle": "Politique d’annulation",
                "disclaimerTitle": "Avis de non-responsabilité",
                "disclaimerIntro": "Veuillez lire attentivement l’avis de non-responsabilité suivant avant d’utiliser les services CareVia.",
                "disclaimerInfoTitle": "Exactitude des informations",
                "disclaimerInfoText": "Les informations sur cette plateforme sont fournies à titre informatif général. CareVia s’efforce d’en garantir l’exactitude sans pouvoir en garantir l’exhaustivité à tout moment.",
                "disclaimerLiabilityTitle": "Limitation de responsabilité",
                "disclaimerLiabilityText": "CareVia n’est pas responsable des dommages directs ou indirects pouvant résulter de l’utilisation de la plateforme ou des services des prestataires.",
                "disclaimerCareTitle": "Nature du service",
                "disclaimerCareText": "CareVia agit comme intermédiaire mettant en relation les familles avec des prestataires qualifiés et ne remplace pas un avis médical ou des soins infirmiers spécialisés.",
                "disclaimerUserTitle": "Responsabilité de l’utilisateur",
                "disclaimerUserText": "L’utilisateur est responsable de vérifier l’adéquation du service à ses besoins et de fournir des informations exactes lors de la réservation.",
                "cancellationCardDesc": "Des règles simples d’annulation et de reprogrammation, faciles à comprendre.",
                "faqTitle": "Questions fréquentes",
                "faq1q": "Le service est-il disponible partout au Maroc ?",
                "faq1a": "Oui. CareVia accepte les demandes partout au Maroc, selon la couverture de la ville, l’horaire et la disponibilité des intervenants.",
                "faq2q": "Comment se passe la confirmation de réservation ?",
                "faq2a": "Après l’envoi de la demande, la famille reçoit un récapitulatif puis est contactée pour valider les détails et l’étape suivante.",
                "faq3q": "Puis-je changer la date ou l’horaire plus tard ?",
                "faq3a": "Oui, un changement peut être demandé avant la validation finale, selon la disponibilité du caregiver.",
                "faq4q": "Puis-je redemander le même caregiver ?",
                "faq4a": "Oui, une nouvelle demande avec le même caregiver peut être étudiée si son planning le permet.",
                "faq5q": "Combien de temps avant dois-je réserver ?",
                "faq5a": "Pour une meilleure disponibilité, il vaut mieux réserver à l’avance, surtout pour le soir, le week-end et les accompagnements.",
                "faq6q": "Y a-t-il une annulation ou un remboursement ?",
                "faq6a": "Oui. La page d’annulation explique comment fonctionnent le report, le délai d’annulation et l’examen d’un remboursement.",
                "benefit1Title": "Caregivers sélectionnés avec soin",
                "benefit1Desc": "Les profils sont montrés de manière plus rassurante pour aider les familles à mieux comparer.",
                "benefit2Title": "Profils plus clairs",
                "benefit2Desc": "Les informations importantes sont plus faciles à comprendre avant la confirmation finale.",
                "benefit3Title": "Réservation plus simple",
                "benefit3Desc": "Le parcours reste facile du choix du service jusqu’à la confirmation et au suivi.",
                "benefit4Title": "Support plus rapide",
                "benefit4Desc": "Le parcours est pensé pour rendre le suivi familial et le prochain contact plus rapides.",
                "softBadge1": "Sélection soignée",
                "softBadge2": "Profils clairs",
                "softBadge3": "Respect de la confidentialité",
                "orderNumberLabel": "Numéro de demande",
                "nextStepTitle": "Quelle est la suite ?",
                "nextStepText": "Votre demande sera revue et vous serez contacté pour confirmer le caregiver, l’horaire et le suivi.",
                "backHome": "Retour à l’accueil",
                "privacyIntro": "Nous ne collectons que les informations nécessaires pour étudier la demande, contacter la famille et organiser le service.",
                "policyCollectedTitle": "Données pouvant être collectées",
                "policyCollectedText": "Nom du client, coordonnées, ville, service choisi, date, heures et préférence de caregiver.",
                "policyUseTitle": "Utilisation",
                "policyUseText": "Pour confirmer la demande, préparer le suivi et tenir la famille informée.",
                "policyShareTitle": "Partage",
                "policyShareText": "Les informations ne devraient être partagées que si cela est nécessaire à la coordination du service, pas pour un marketing sans lien.",
                "termsIntro": "Ces conditions expliquent la logique de réservation, la responsabilité de la famille de fournir des informations correctes et le caractère révisable de chaque demande.",
                "termsBookingTitle": "Logique de réservation",
                "termsBookingText": "Une demande est d’abord envoyée, puis revue et confirmée avec la famille.",
                "termsAccuracyTitle": "Exactitude des informations",
                "termsAccuracyText": "La famille doit fournir des informations correctes sur le client, le téléphone, la ville et l’horaire souhaité.",
                "termsAvailabilityTitle": "Disponibilité",
                "termsAvailabilityText": "Le choix du caregiver et du créneau dépend de la disponibilité et de la coordination finale.",
                "cancellationIntro": "Cette page explique comment peuvent fonctionner l’annulation, le report et l’examen d’un remboursement.",
                "cancelEarlyTitle": "Annulation anticipée",
                "cancelEarlyText": "Une demande annulée tôt peut être revue plus facilement pour une reprogrammation.",
                "cancelLateTitle": "Changements tardifs",
                "cancelLateText": "Les changements tardifs peuvent dépendre de la disponibilité du caregiver et du temps déjà réservé.",
                "cancelRefundTitle": "Examen du remboursement",
                "cancelRefundText": "Tout remboursement devrait être étudié selon le délai et le statut du service.",
                "liveEstimateFees": "Frais supplémentaires",
                "liveEstimateNight": "Frais de nuit",
                "liveEstimateWeekend": "Frais week-end",
                "liveEstimateTravel": "Frais de déplacement",
                "liveEstimateStartingFrom": "À partir de",
                "liveEstimateMinHours": "Min. réservation"
        },
        "ar": {
                "aboutTitle": "من هي CareVia؟",
                "aboutSub": "تقديم أوضح للمشروع، للرسالة، ولطريقة عرض مقدمي الرعاية.",
                "aboutCard1Title": "ما هي CareVia؟",
                "aboutCard1Desc": "CareVia هي فكرة محلية لحجز رعاية منزلية لكبار السن، بهدف مساعدة العائلات على إيجاد دعم مطمئن بشكل أسهل.",
                "aboutCard2Title": "لماذا أنشأنا المشروع",
                "aboutCard2Desc": "الهدف هو جعل رعاية كبار السن أكثر إنسانية وأكثر تنظيماً وأسهل فهماً من أول زيارة.",
                "aboutCard3Title": "قيمتنا",
                "aboutCard3Desc": "نركز على الوضوح، والتقديم المحترم، ومسار حجز أهدأ للعائلات.",
                "aboutCard4Title": "كيف نعرض مقدمي الرعاية",
                "aboutCard4Desc": "تُعرض الملفات بتفاصيل عملية، ومدى ملاءمة الخدمة، والتقييمات، ومقارنة أسهل بين الخيارات.",
                "pricingTitle": "أسعار أوضح",
                "pricingSub": "يمكن للعائلات فهم أسعار البداية وقواعد التسعير قبل متابعة الحجز.",
                "priceStartingFrom": "ابتداءً من",
                "pricingMinHours": "الحد الأدنى للحجز",
                "pricingHourly": "السعر في الساعة",
                "pricingTravel": "رسوم التنقل",
                "pricingTravelIncluded": "يُحسب حسب المدينة",
                "pricingNightWeekend": "ليل / نهاية الأسبوع",
                "pricingNote": "يتم تحديث التقدير أثناء الحجز. وقد يختلف التأكيد النهائي حسب المدينة المختارة أو الساعات المتأخرة أو نهاية الأسبوع أو التنقل بين المدن.",
                "testimonialsTitle": "آراء العائلات",
                "testimonialsSub": "تساعد الآراء القصيرة على جعل الخدمة أكثر واقعية ومحلية وموثوقة.",
                "testimonial1": "كانت خطوات الحجز بسيطة، وكان ملف مقدم الرعاية واضحاً بما يكفي لتقرر عائلتنا بسرعة.",
                "testimonial2": "أعجبني أنني رأيت الساعات والمجموع التقديري قبل إنهاء الطلب، وهذا جعل الخدمة أكثر شفافية.",
                "testimonial3": "الواجهة هادئة وسهلة على الهاتف، وهذا مهم جداً عند الحجز لوالد أو جد أو جدة.",
                "legalTitle": "الصفحات القانونية والسياسات",
                "legalSub": "صفحات أساسية تجعل المشروع أكثر جدية ومصداقية.",
                "privacyTitle": "سياسة الخصوصية",
                "privacyCardDesc": "كيف يتم التعامل مع بيانات التواصل ومعلومات الحجز.",
                "termsTitle": "شروط الخدمة",
                "termsCardDesc": "شروط الخدمة الأساسية ومنطق الحجز ومسؤوليات العائلة.",
                "cancellationTitle": "سياسة الإلغاء",
                "disclaimerTitle": "إخلاء المسؤولية",
                "disclaimerIntro": "يُرجى قراءة إخلاء المسؤولية التالي بعناية قبل استخدام خدمات CareVia.",
                "disclaimerInfoTitle": "دقة المعلومات",
                "disclaimerInfoText": "تُقدَّم المعلومات الواردة على هذه المنصة لأغراض إعلامية عامة فقط، وتبذل CareVia جهودها لضمان دقتها دون أن تضمن اكتمالها في جميع الأوقات.",
                "disclaimerLiabilityTitle": "حدود المسؤولية",
                "disclaimerLiabilityText": "لا تتحمل CareVia أي مسؤولية عن أضرار مباشرة أو غير مباشرة قد تنشأ عن استخدام المنصة أو الخدمات المقدمة من مقدمي الرعاية.",
                "disclaimerCareTitle": "طبيعة الخدمة",
                "disclaimerCareText": "تعمل CareVia بوصفها وسيطاً يربط الأسر بمقدمي الرعاية المؤهلين، ولا تحل محل الاستشارة الطبية أو التمريض المتخصص.",
                "disclaimerUserTitle": "مسؤولية المستخدم",
                "disclaimerUserText": "يتحمل المستخدم مسؤولية التحقق من ملاءمة الخدمة لاحتياجاته وتقديم معلومات دقيقة وكاملة عند الحجز.",
                "cancellationCardDesc": "قواعد بسيطة للإلغاء وإعادة الجدولة يمكن فهمها بسرعة.",
                "faqTitle": "الأسئلة الشائعة",
                "faq1q": "هل الخدمة متوفرة في جميع أنحاء المغرب؟",
                "faq1a": "نعم، CareVia تستقبل الطلبات في مختلف مدن المغرب حسب التوفر، توقيت الطلب، وتغطية مقدمي الرعاية.",
                "faq2q": "كيف يتم تأكيد الحجز؟",
                "faq2a": "بعد إرسال الطلب، تتوصل العائلة بملخص للتأكيد ثم يتم التواصل معها لتثبيت التفاصيل والخطوة التالية.",
                "faq3q": "هل يمكنني تغيير التاريخ أو الوقت لاحقاً؟",
                "faq3a": "نعم، يمكن طلب التغيير قبل تثبيت الزيارة النهائية حسب توفر مقدم الرعاية.",
                "faq4q": "هل يمكنني طلب نفس مقدم الرعاية مرة أخرى؟",
                "faq4a": "نعم، يمكن دراسة طلب جديد مع نفس مقدم الرعاية إذا كان الجدول يسمح بذلك.",
                "faq5q": "كم من الوقت قبل الموعد يجب أن أحجز؟",
                "faq5a": "لأفضل توفر، من الأفضل الحجز مسبقاً، خصوصاً للمساء ونهاية الأسبوع وخدمات المرافقة.",
                "faq6q": "هل توجد سياسة للإلغاء أو الاسترجاع؟",
                "faq6a": "نعم، صفحة الإلغاء تشرح كيفية التعامل مع إعادة الجدولة، ووقت الإلغاء، ومراجعة الاسترجاع.",
                "benefit1Title": "مقدمو رعاية مختارون بعناية",
                "benefit1Desc": "يتم عرض الملفات بطريقة مطمئنة أكثر لمساعدة العائلات على المقارنة والاختيار بشكل أفضل.",
                "benefit2Title": "ملفات واضحة",
                "benefit2Desc": "المعلومات المهمة صارت أسهل للفهم قبل خطوة التأكيد النهائية.",
                "benefit3Title": "حجز سهل",
                "benefit3Desc": "يبقى المسار بسيطاً من اختيار الخدمة إلى التأكيد والمتابعة.",
                "benefit4Title": "دعم أسرع",
                "benefit4Desc": "تم تصميم المسار ليجعل المتابعة العائلية والتواصل التالي أسرع.",
                "softBadge1": "اختيار بعناية",
                "softBadge2": "ملفات واضحة",
                "softBadge3": "احترام الخصوصية",
                "orderNumberLabel": "رقم الطلب",
                "nextStepTitle": "ما الخطوة التالية؟",
                "nextStepText": "سيتم مراجعة طلبكم وسيتم التواصل معكم لتأكيد مقدم الرعاية والتوقيت وتفاصيل المتابعة.",
                "backHome": "العودة إلى الرئيسية",
                "privacyIntro": "نحن نجمع فقط بيانات الحجز الضرورية لمراجعة الطلب والتواصل مع العائلة وتنظيم الخدمة.",
                "policyCollectedTitle": "ما الذي قد يتم جمعه",
                "policyCollectedText": "اسم العميل، وسائل التواصل، المدينة، الخدمة المختارة، التاريخ، الساعات، وتفضيل مقدم الرعاية.",
                "policyUseTitle": "كيف تُستخدم البيانات",
                "policyUseText": "لتأكيد الطلب، وتحضير المتابعة، وإبقاء العائلة على اطلاع بخصوص الحجز.",
                "policyShareTitle": "المشاركة",
                "policyShareText": "يجب مشاركة المعلومات فقط عند الحاجة لتنسيق الخدمة، وليس لتسويق غير مرتبط بالخدمة.",
                "termsIntro": "تشرح هذه الشروط منطق الحجز ومسؤولية العائلة في تقديم معلومات صحيحة وطبيعة مراجعة كل طلب قبل تثبيته.",
                "termsBookingTitle": "منطق الحجز",
                "termsBookingText": "يتم إرسال طلب الحجز أولاً، ثم مراجعته وتأكيده مع العائلة.",
                "termsAccuracyTitle": "صحة المعلومات",
                "termsAccuracyText": "يجب على العائلة تقديم معلومات صحيحة عن العميل، ورقم الهاتف، والمدينة، والتوقيت المطلوب.",
                "termsAvailabilityTitle": "التوفر",
                "termsAvailabilityText": "اختيار مقدم الرعاية والتوقيت النهائيين يعتمدان على التوفر والتنسيق النهائي.",
                "cancellationIntro": "تشرح هذه الصفحة كيف يمكن أن يتم التعامل مع الإلغاء وإعادة الجدولة ومراجعة الاسترجاع.",
                "cancelEarlyTitle": "إلغاء مبكر",
                "cancelEarlyText": "الطلبات التي تُلغى مبكراً يمكن مراجعتها بشكل أسهل لإعادة الجدولة.",
                "cancelLateTitle": "تغييرات متأخرة",
                "cancelLateText": "التغييرات المتأخرة قد تعتمد على توفر مقدم الرعاية والوقت الذي تم حجزه مسبقاً.",
                "cancelRefundTitle": "مراجعة الاسترجاع",
                "cancelRefundText": "أي استرجاع يجب أن يُراجع حسب التوقيت وحالة الخدمة.",
                "liveEstimateFees": "رسوم إضافية",
                "liveEstimateNight": "رسوم ليلية",
                "liveEstimateWeekend": "رسوم نهاية الأسبوع",
                "liveEstimateTravel": "رسوم التنقل",
                "liveEstimateStartingFrom": "ابتداءً من",
                "liveEstimateMinHours": "الحد الأدنى"
        },
        "es": {
                "aboutTitle": "¿Quién es CareVia?",
                "aboutSub": "Una presentación más clara del proyecto, la misión y cómo funciona la selección de cuidadores.",
                "aboutCard1Title": "¿Qué es CareVia?",
                "aboutCard1Desc": "CareVia es un concepto local de reserva de atención a mayores diseñado para ayudar a las familias a encontrar apoyo en el hogar de manera más sencilla.",
                "aboutCard2Title": "Por qué lo creamos",
                "aboutCard2Desc": "El objetivo es hacer que la atención a personas mayores sea más humana, organizada y fácil de entender desde la primera visita.",
                "aboutCard3Title": "Nuestro valor",
                "aboutCard3Desc": "Nos centramos en la claridad, la presentación respetuosa y un proceso de reserva más tranquilo para las familias.",
                "aboutCard4Title": "Cómo se presentan los cuidadores",
                "aboutCard4Desc": "Los perfiles muestran detalles prácticos, adecuación al servicio, valoraciones y una comparación más sencilla.",
                "pricingTitle": "Precios más claros",
                "pricingSub": "Las familias pueden entender los precios iniciales y las reglas de tarificación antes de continuar con la reserva.",
                "priceStartingFrom": "Desde",
                "pricingMinHours": "Reserva mínima",
                "pricingHourly": "Tarifa por hora",
                "pricingTravel": "Gasto de desplazamiento",
                "pricingTravelIncluded": "Calculado por ciudad",
                "pricingNightWeekend": "Noche / fin de semana",
                "pricingNote": "La estimación en vivo se actualiza durante la reserva. La confirmación final puede variar según la ciudad elegida, las horas tardías, el fin de semana o el acompañamiento entre ciudades.",
                "testimonialsTitle": "Lo que dicen las familias",
                "testimonialsSub": "Testimonios breves que hacen que el servicio parezca más real, local y fiable.",
                "testimonial1": "Los pasos de reserva eran simples y el perfil del cuidador fue lo suficientemente claro para que nuestra familia decida rápidamente.",
                "testimonial2": "Me gustó ver las horas y el total estimado antes de finalizar la solicitud. Hizo que el servicio se sintiera más transparente.",
                "testimonial3": "La interfaz es tranquila y fácil de usar en el teléfono, lo que importa mucho al reservar para un padre o abuelo.",
                "legalTitle": "Páginas legales y políticas",
                "legalSub": "Páginas esenciales que hacen que el proyecto se sienta más serio y de confianza.",
                "privacyTitle": "Política de privacidad",
                "privacyCardDesc": "Cómo se gestionan los datos de contacto e información de reserva.",
                "termsTitle": "Términos de servicio",
                "termsCardDesc": "Las condiciones básicas del servicio, la lógica de reserva y las responsabilidades de la familia.",
                "cancellationTitle": "Política de cancelación",
                "disclaimerTitle": "Aviso legal",
                "disclaimerIntro": "Lea detenidamente el siguiente aviso legal antes de utilizar los servicios de CareVia.",
                "disclaimerInfoTitle": "Exactitud de la información",
                "disclaimerInfoText": "La información de esta plataforma se proporciona con fines informativos generales. CareVia se esfuerza por garantizar su exactitud, pero no garantiza su integridad en todo momento.",
                "disclaimerLiabilityTitle": "Limitación de responsabilidad",
                "disclaimerLiabilityText": "CareVia no se hace responsable de los daños directos o indirectos que puedan derivarse del uso de la plataforma o de los servicios prestados por los cuidadores.",
                "disclaimerCareTitle": "Naturaleza del servicio",
                "disclaimerCareText": "CareVia actúa como intermediario que conecta a las familias con cuidadores cualificados y no sustituye el consejo médico ni los cuidados de enfermería especializados.",
                "disclaimerUserTitle": "Responsabilidad del usuario",
                "disclaimerUserText": "El usuario es responsable de verificar la idoneidad del servicio para sus necesidades y de proporcionar información precisa y completa al reservar.",
                "cancellationCardDesc": "Reglas simples de cancelación y reprogramación que las familias pueden entender rápidamente.",
                "faqTitle": "Preguntas frecuentes",
                "faq1q": "¿Está el servicio disponible en todo Marruecos?",
                "faq1a": "Sí. CareVia acepta solicitudes en todo Marruecos, dependiendo de la cobertura de la ciudad, el horario y la disponibilidad del cuidador.",
                "faq2q": "¿Cómo se confirma la reserva?",
                "faq2a": "Tras enviar la solicitud, la familia recibe un resumen de confirmación y es contactada para validar los detalles y el siguiente paso.",
                "faq3q": "¿Puedo cambiar la fecha o la hora después?",
                "faq3a": "Sí, se pueden solicitar cambios antes de que se finalice la visita, dependiendo de la disponibilidad del cuidador.",
                "faq4q": "¿Puedo solicitar el mismo cuidador de nuevo?",
                "faq4a": "Sí, se pueden revisar solicitudes repetidas para el mismo cuidador cuando el horario lo permita.",
                "faq5q": "¿Con cuánta antelación debo reservar?",
                "faq5a": "Para la mejor disponibilidad, lo ideal es reservar con antelación, especialmente para tardes, fines de semana y solicitudes de acompañamiento.",
                "faq6q": "¿Hay gestión de cancelaciones o reembolsos?",
                "faq6a": "Sí. La página de cancelación explica cómo puede funcionar la reprogramación, el momento de cancelación y la revisión del reembolso.",
                "benefit1Title": "Cuidadores seleccionados con cuidado",
                "benefit1Desc": "Los perfiles se presentan de forma más tranquilizadora para ayudar a las familias a comparar y elegir mejor.",
                "benefit2Title": "Perfiles claros",
                "benefit2Desc": "Los detalles importantes son más fáciles de entender antes del paso de confirmación final.",
                "benefit3Title": "Proceso de reserva fácil",
                "benefit3Desc": "El proceso sigue siendo simple desde la elección del servicio hasta la confirmación y el seguimiento.",
                "benefit4Title": "Camino de soporte rápido",
                "benefit4Desc": "El flujo de reserva está diseñado para hacer que el seguimiento familiar y el próximo contacto sean más rápidos.",
                "softBadge1": "Seleccionados cuidadosamente",
                "softBadge2": "Perfiles claros",
                "softBadge3": "Respeto a la privacidad",
                "orderNumberLabel": "Número de pedido",
                "nextStepTitle": "¿Qué pasa después?",
                "nextStepText": "Tu solicitud será revisada y nos pondremos en contacto contigo para confirmar el cuidador, el horario y los detalles de seguimiento.",
                "backHome": "Volver al inicio",
                "privacyIntro": "Solo recopilamos los datos de reserva necesarios para revisar la solicitud, contactar a la familia y organizar el servicio.",
                "policyCollectedTitle": "Qué puede recogerse",
                "policyCollectedText": "Nombre del cliente, datos de contacto, ciudad, servicio seleccionado, fecha, horas y preferencia de cuidador.",
                "policyUseTitle": "Cómo se utiliza",
                "policyUseText": "Para confirmar la solicitud, preparar el seguimiento e informar a la familia sobre la reserva.",
                "policyShareTitle": "Compartición",
                "policyShareText": "La información solo debe compartirse cuando sea necesario para la coordinación del servicio y no para marketing no relacionado.",
                "termsIntro": "Estos términos explican el flujo básico de reserva, la responsabilidad de la familia de proporcionar información correcta y la naturaleza de revisión de cada solicitud.",
                "termsBookingTitle": "Flujo de reserva",
                "termsBookingText": "Una solicitud de reserva se envía primero, luego se revisa y confirma con la familia.",
                "termsAccuracyTitle": "Exactitud de la información",
                "termsAccuracyText": "Las familias deben proporcionar datos precisos del cliente, número de teléfono, ciudad y preferencia de horario.",
                "termsAvailabilityTitle": "Disponibilidad",
                "termsAvailabilityText": "La elección del cuidador y el horario dependen de la disponibilidad y la coordinación final.",
                "cancellationIntro": "Esta página explica cómo pueden funcionar la cancelación, la reprogramación y la revisión del reembolso.",
                "cancelEarlyTitle": "Cancelación anticipada",
                "cancelEarlyText": "Las solicitudes canceladas con anticipación pueden revisarse para una reprogramación más sencilla.",
                "cancelLateTitle": "Cambios tardíos",
                "cancelLateText": "Los cambios tardíos pueden depender de la disponibilidad del cuidador y del tiempo ya reservado.",
                "cancelRefundTitle": "Revisión de reembolso",
                "cancelRefundText": "Cualquier gestión de reembolso debe revisarse según el momento y el estado del servicio.",
                "liveEstimateFees": "Tarifas adicionales",
                "liveEstimateNight": "Tarifa nocturna",
                "liveEstimateWeekend": "Tarifa fin de semana",
                "liveEstimateTravel": "Tarifa de desplazamiento",
                "liveEstimateStartingFrom": "Desde",
                "liveEstimateMinHours": "Reserva mínima"
        },
        "de": {
                "aboutTitle": "Wer ist CareVia?",
                "aboutSub": "Eine klarere Präsentation des Projekts, der Mission und wie die Pflegepersonen-Auswahl funktioniert.",
                "aboutCard1Title": "Was ist CareVia?",
                "aboutCard1Desc": "CareVia ist ein lokales Buchungskonzept für Altenpflege zu Hause, das Familien dabei hilft, zuverlässige Unterstützung einfacher zu finden.",
                "aboutCard2Title": "Warum wir es gebaut haben",
                "aboutCard2Desc": "Das Ziel ist, die Altenpflege menschlicher, organisierter und vom ersten Besuch an leichter verständlich zu machen.",
                "aboutCard3Title": "Unser Wert",
                "aboutCard3Desc": "Wir setzen auf Klarheit, respektvolle Präsentation und einen ruhigeren Buchungsprozess für Familien.",
                "aboutCard4Title": "Wie Pflegepersonen präsentiert werden",
                "aboutCard4Desc": "Profile zeigen praktische Details, Serviceeignung, Bewertungen und einen einfacheren Vergleich.",
                "pricingTitle": "Klarere Preise",
                "pricingSub": "Familien können die Ausgangspreise und Preisregeln verstehen, bevor sie die Buchung fortsetzen.",
                "priceStartingFrom": "Ab",
                "pricingMinHours": "Mindestbuchung",
                "pricingHourly": "Stundensatz",
                "pricingTravel": "Fahrtkosten",
                "pricingTravelIncluded": "Nach Stadt berechnet",
                "pricingNightWeekend": "Nacht / Wochenende",
                "pricingNote": "Die Live-Schätzung wird während der Buchung aktualisiert. Die endgültige Bestätigung kann je nach gewählter Stadt, späten Stunden, Wochenende oder städteübergreifender Begleitung variieren.",
                "testimonialsTitle": "Was Familien sagen",
                "testimonialsSub": "Kurze Erfahrungsberichte, die den Dienst echter, lokaler und vertrauenswürdiger erscheinen lassen.",
                "testimonial1": "Die Buchungsschritte fühlten sich einfach an, und das Pflegepersonen-Profil war klar genug für unsere Familie, um schnell zu entscheiden.",
                "testimonial2": "Ich mochte es, die Stunden und die geschätzte Gesamtsumme zu sehen, bevor ich die Anfrage abgeschlossen habe. Es ließ den Dienst transparenter wirken.",
                "testimonial3": "Die Benutzeroberfläche ist ruhig und auf dem Telefon einfach zu bedienen, was beim Buchen für einen Elternteil oder Großelternteil sehr wichtig ist.",
                "legalTitle": "Rechtliche Seiten und Richtlinien",
                "legalSub": "Wesentliche Seiten, die das Projekt seriöser und vertrauenswürdiger erscheinen lassen.",
                "privacyTitle": "Datenschutzrichtlinie",
                "privacyCardDesc": "Wie Kontaktdaten und Buchungsinformationen verwaltet werden.",
                "termsTitle": "Nutzungsbedingungen",
                "termsCardDesc": "Die grundlegenden Servicebedingungen, die Buchungslogik und die Verantwortlichkeiten der Familie.",
                "cancellationTitle": "Stornierungsrichtlinie",
                "disclaimerTitle": "Haftungsausschluss",
                "disclaimerIntro": "Bitte lesen Sie den folgenden Haftungsausschluss sorgfältig durch, bevor Sie die CareVia-Dienste nutzen.",
                "disclaimerInfoTitle": "Richtigkeit der Informationen",
                "disclaimerInfoText": "Die auf dieser Plattform bereitgestellten Informationen dienen nur allgemeinen Informationszwecken. CareVia bemüht sich um Genauigkeit, garantiert jedoch keine Vollständigkeit zu jeder Zeit.",
                "disclaimerLiabilityTitle": "Haftungsbeschränkung",
                "disclaimerLiabilityText": "CareVia haftet nicht für direkte oder indirekte Schäden, die aus der Nutzung der Plattform oder der von Pflegekräften erbrachten Leistungen entstehen können.",
                "disclaimerCareTitle": "Art der Dienstleistung",
                "disclaimerCareText": "CareVia fungiert als Vermittler zwischen Familien und qualifizierten Pflegekräften und ersetzt keine ärztliche Beratung oder spezialisierte Krankenpflege.",
                "disclaimerUserTitle": "Verantwortung des Nutzers",
                "disclaimerUserText": "Der Nutzer ist dafür verantwortlich, die Eignung des Dienstes für seine Bedürfnisse zu überprüfen und bei der Buchung genaue und vollständige Angaben zu machen.",
                "cancellationCardDesc": "Einfache Stornierungsregeln und Umplanungsregeln, die Familien schnell verstehen können.",
                "faqTitle": "Häufig gestellte Fragen",
                "faq1q": "Ist der Dienst in ganz Marokko verfügbar?",
                "faq1a": "Ja. CareVia nimmt Anfragen in ganz Marokko entgegen, abhängig von der Stadtabdeckung, dem Zeitplan und der Verfügbarkeit der Pflegepersonen.",
                "faq2q": "Wie läuft die Buchungsbestätigung ab?",
                "faq2a": "Nach Einreichung der Anfrage erhält die Familie eine Bestätigungszusammenfassung und wird kontaktiert, um die Details und den nächsten Schritt zu bestätigen.",
                "faq3q": "Kann ich Datum oder Uhrzeit später ändern?",
                "faq3a": "Ja, Änderungen können vor der endgültigen Terminbestätigung beantragt werden, abhängig von der Verfügbarkeit der Pflegeperson.",
                "faq4q": "Kann ich dieselbe Pflegeperson erneut anfragen?",
                "faq4a": "Ja, wiederholte Anfragen für dieselbe Pflegeperson können geprüft werden, wenn der Zeitplan es erlaubt.",
                "faq5q": "Wie früh sollte ich buchen?",
                "faq5a": "Für beste Verfügbarkeit sollten Familien idealerweise im Voraus buchen, besonders für Abende, Wochenenden und Begleitanfragen.",
                "faq6q": "Gibt es eine Stornierung oder Rückerstattungsregelung?",
                "faq6a": "Ja. Die Stornierungsseite erklärt, wie Umplanung, Stornierungszeitraum und Rückerstattungsprüfung funktionieren können.",
                "benefit1Title": "Sorgfältig ausgewählte Pflegepersonen",
                "benefit1Desc": "Profile werden beruhigender präsentiert, damit Familien besser vergleichen und wählen können.",
                "benefit2Title": "Klare Profile",
                "benefit2Desc": "Wichtige Details sind vor dem finalen Bestätigungsschritt leichter zu verstehen.",
                "benefit3Title": "Einfacher Buchungsablauf",
                "benefit3Desc": "Der Prozess bleibt von der Diensteauswahl bis zur Bestätigung und Nachverfolgung einfach.",
                "benefit4Title": "Schneller Supportweg",
                "benefit4Desc": "Der Buchungsablauf ist so gestaltet, dass die Familien-Nachverfolgung und der nächste Kontakt schneller wirken.",
                "softBadge1": "Sorgfältig ausgewählt",
                "softBadge2": "Klare Profile",
                "softBadge3": "Respekt für Privatsphäre",
                "orderNumberLabel": "Bestellnummer",
                "nextStepTitle": "Was passiert als nächstes?",
                "nextStepText": "Ihre Anfrage wird geprüft und Sie werden kontaktiert, um die Pflegeperson, den Zeitplan und die Nachverfolgungsdetails zu bestätigen.",
                "backHome": "Zurück zur Startseite",
                "privacyIntro": "Wir erheben nur die Buchungsdaten, die zur Prüfung der Anfrage, zur Kontaktaufnahme mit der Familie und zur Organisation des Dienstes erforderlich sind.",
                "policyCollectedTitle": "Was erhoben werden kann",
                "policyCollectedText": "Kundenname, Kontaktdaten, Stadt, gewählter Dienst, Datum, Stunden und Pflegepersonenpräferenz.",
                "policyUseTitle": "Wie es verwendet wird",
                "policyUseText": "Um die Anfrage zu bestätigen, die Nachverfolgung vorzubereiten und die Familie über die Buchung informiert zu halten.",
                "policyShareTitle": "Weitergabe",
                "policyShareText": "Informationen sollten nur geteilt werden, wenn es für die Dienstleistungskoordination notwendig ist, und nicht für nicht verbundenes Marketing.",
                "termsIntro": "Diese Bedingungen erklären den grundlegenden Buchungsablauf, die Verantwortung der Familie, korrekte Informationen bereitzustellen, und die Prüfungsnatur jeder Anfrage.",
                "termsBookingTitle": "Buchungsablauf",
                "termsBookingText": "Eine Buchungsanfrage wird zuerst eingereicht, dann mit der Familie geprüft und bestätigt.",
                "termsAccuracyTitle": "Informationsgenauigkeit",
                "termsAccuracyText": "Familien sollten genaue Kundendaten, Telefonnummer, Stadt und Zeitplanpräferenz angeben.",
                "termsAvailabilityTitle": "Verfügbarkeit",
                "termsAvailabilityText": "Pflegepersonenwahl und Zeitplan hängen von der Verfügbarkeit und der endgültigen Koordination ab.",
                "cancellationIntro": "Diese Seite erklärt, wie Stornierung, Umplanung und Rückerstattungsprüfung funktionieren können.",
                "cancelEarlyTitle": "Frühzeitige Stornierung",
                "cancelEarlyText": "Frühzeitig stornierte Anfragen können für eine einfachere Umplanung geprüft werden.",
                "cancelLateTitle": "Späte Änderungen",
                "cancelLateText": "Späte Änderungen können von der Verfügbarkeit der Pflegeperson und der bereits reservierten Zeit abhängen.",
                "cancelRefundTitle": "Rückerstattungsprüfung",
                "cancelRefundText": "Jede Rückerstattungsregelung sollte nach dem Zeitpunkt und dem Servicestatus geprüft werden.",
                "liveEstimateFees": "Zusätzliche Gebühren",
                "liveEstimateNight": "Nachtgebühr",
                "liveEstimateWeekend": "Wochenendgebühr",
                "liveEstimateTravel": "Fahrtkosten",
                "liveEstimateStartingFrom": "Ab",
                "liveEstimateMinHours": "Mindestbuchung"
        }
};
        Object.keys(extraTranslations).forEach(lang => Object.assign(translations[lang], extraTranslations[lang]));

        const dynamicTexts = {
            en: {
                years: "years",
                selectedHoursLabel: "Selected hours:",
                liveEstimateTitle: "Live price estimate",
                liveEstimateHint: "The amount updates automatically as you select hours.",
                liveEstimateEmpty: "Select at least one hour to see the estimated total.",
                liveEstimateHours: "Selected hours",
                liveEstimateRate: "Rate",
                liveEstimateSubtotal: "Subtotal",
                liveEstimateSavings: "Savings",
                liveEstimateTotal: "Estimated total",
                liveEstimatePerHour: "per hour",
                liveEstimateTravel: "Travel fee",
                liveEstimateNight: "Night fee",
                liveEstimateWeekend: "Weekend fee",
                flexibleHours: "Flexible hours",
                flexibleHoursDesc: "Choose hours that suit you",
                trainedCaregivers: "Trained caregivers",
                trainedCaregiversDesc: "Caregiver profiles are presented clearly",
                personalizedCare: "Personalized care",
                personalizedCareDesc: "Services are adapted to elder care needs",
                safetyFirst: "Safety first",
                safetyFirstDesc: "A calm and reassuring booking experience",
                bioLabel: "Bio",
                tasksRatingsTitle: "Completed tasks & ratings",
                skillsTitle: "Skills & competencies",
                backToCaregiversBtn: "Back to Caregivers",
                summaryService: "Service",
                summaryClient: "Client",
                summaryDate: "Date",
                summaryHours: "Hours",
                summaryCaregiver: "Caregiver",
                summaryTotal: "Total",
                hourSingular: "hour",
                hourPlural: "hours",
                submitting: "Submitting...",
                feedbackTitle: "How was your booking experience?",
                feedbackHint: "You can rate the booking flow and leave a short comment.",
                ratingLabel: "Your rating",
                commentLabel: "Your comment",
                feedbackCommentPlaceholder: "Tell us what you liked or what can be improved",
                submitFeedback: "Send feedback",
                feedbackThanks: "Thanks for your feedback.",
                urgentBadge: "Urgent request",
                urgentTitle: "Need help quickly?",
                urgentIntro: "Send a shorter urgent request and we will review availability first.",
                urgentAvailabilityNote: "Urgent requests are subject to availability and may include a priority fee.",
                urgentFirstNameLabel: "First name",
                urgentLastNameLabel: "Last name",
                urgentPhoneLabel: "Phone number",
                urgentEmailLabel: "Email",
                urgentCityLabel: "City",
                urgentCityPrompt: "Choose a city",
                urgentServiceLabel: "Service",
                urgentTimingLabel: "When do you need help?",
                urgentNotesLabel: "Notes",
                urgentNotesPlaceholder: "Tell us the case details and any note that can help us act faster",
                urgentNotesHelp: "Please fill in the notes to help us process urgent requests faster.",
                urgentSubmitBtn: "Send urgent request",
                urgentSuccessTitle: "Urgent request sent",
                urgentSuccessText: "We will review availability first and contact you quickly to confirm.",
                urgentOrderLabel: "Reference",
                urgentBackStandard: "Standard booking",
                urgentBackHome: "Return home",
                urgentServicePrompt: "Choose a service",
                urgentTimingPrompt: "Choose urgency",
                urgentTimingNow: "As soon as possible",
                urgentTiming2Hours: "Within 2 hours",
                urgentTimingToday: "Later today",
                urgentTimingTonight: "Tonight",
                urgentMissingFields: "Please enter first name, last name, phone number, email, city, service, urgency level, and notes.",
                urgentPhoneInvalid: "Please enter a valid Moroccan phone number.",
                urgentEmailInvalid: "Please enter a valid email address.",
                joinUsButton: "Join us",
                joinUsBadge: "We are hiring",
                joinUsTitle: "Join the CareVia team",
                joinUsIntro: "Fill in your information and send your application. We will review it and reply by email.",
                joinUsNote: "Make sure your information is correct and upload your CV and a clear selfie photo.",
                joinFirstNameLabel: "First name",
                joinLastNameLabel: "Last name",
                joinBirthDateLabel: "Date of birth",
                joinResidenceLabel: "Place of residence",
                joinAddressLabel: "Address",
                joinCityLabel: "City",
                joinCityPrompt: "Choose a city",
                joinPhoneLabel: "Phone number",
                joinEmailLabel: "Email",
                joinEducationLevelLabel: "Education level",
                joinDiplomasLabel: "Diplomas",
                joinCertificatesLabel: "Certificates",
                joinFormationsLabel: "Training courses",
                joinCvLabel: "Upload your CV",
                joinSelfieLabel: "Upload a selfie photo",
                joinNoFile: "No file selected",
                joinCurrentStatusLabel: "What are you doing now?",
                joinCurrentStatusPrompt: "Choose your current status",
                joinStatusStudent: "Student",
                joinStatusWorking: "Working",
                joinStatusOther: "Other",
                joinStudentStudyLabel: "If you are a student, what do you study?",
                joinWorkerJobLabel: "If you are working, what is your current job?",
                joinJobTypeLabel: "Are you applying for a main job or part-time?",
                joinJobTypePrompt: "Choose application type",
                joinJobTypeMain: "Main job",
                joinJobTypePartTime: "Part-time job",
                joinSubmitBtn: "Send application",
                joinSuccessTitle: "Application received",
                joinSuccessText: "Your application has been registered. We will reply to the email address you entered.",
                joinBackHome: "Back home",
                joinMissingFields: "Please complete all required fields and upload your CV and selfie.",
                joinPhoneInvalid: "Please enter a valid Moroccan phone number.",
                joinEmailInvalid: "Please enter a valid email address.",
                joinStudentStudyRequired: "Please tell us what you study.",
                joinWorkerJobRequired: "Please tell us your current job.",
                placeholderFirstName: "e.g. Ahmed",
                placeholderLastName: "e.g. Benali",
                placeholderPhone: "+212 6XX-XXXXXX or 06XXXXXXXX",
                placeholderEmail: "example@mail.com"
            },
            ar: {
                years: "سنة",
                selectedHoursLabel: "الساعات المحددة:",
                liveEstimateTitle: "تقدير فوري للسعر",
                liveEstimateHint: "المبلغ يتحدّث تلقائياً كلما اخترت ساعات أكثر أو أقل.",
                liveEstimateEmpty: "اختر ساعة واحدة على الأقل لعرض المبلغ التقريبي.",
                liveEstimateHours: "الساعات المختارة",
                liveEstimateRate: "السعر",
                liveEstimateSubtotal: "المجموع قبل التخفيض",
                liveEstimateSavings: "التخفيض",
                liveEstimateTotal: "المجموع التقريبي",
                liveEstimatePerHour: "لكل ساعة",
                liveEstimateTravel: "رسوم التنقل",
                liveEstimateNight: "رسوم ليلية",
                liveEstimateWeekend: "رسوم نهاية الأسبوع",
                flexibleHours: "ساعات مرنة",
                flexibleHoursDesc: "اختر الساعات التي تناسبك",
                trainedCaregivers: "مقدمو رعاية بملفات واضحة",
                trainedCaregiversDesc: "يتم عرض ملفات مقدمي الرعاية بشكل منظم وواضح",
                personalizedCare: "رعاية مخصصة",
                personalizedCareDesc: "الخدمات مصممة حسب احتياجات رعاية كبار السن",
                safetyFirst: "السلامة أولاً",
                safetyFirstDesc: "تجربة حجز هادئة ومطمئنة",
                bioLabel: "نبذة",
                tasksRatingsTitle: "المهام المنجزة والتقييمات",
                skillsTitle: "المهارات والكفاءات",
                backToCaregiversBtn: "العودة إلى مقدمي الرعاية",
                summaryService: "الخدمة",
                summaryClient: "العميل",
                summaryDate: "التاريخ",
                summaryHours: "الساعات",
                summaryCaregiver: "مقدم الرعاية",
                summaryTotal: "المجموع",
                hourSingular: "ساعة",
                hourPlural: "ساعات",
                submitting: "جارٍ الإرسال...",
                feedbackTitle: "كيف كانت تجربة الحجز؟",
                feedbackHint: "يمكنكم تقييم مسار الحجز وترك تعليق قصير.",
                ratingLabel: "التقييم",
                commentLabel: "التعليق",
                feedbackCommentPlaceholder: "اكتبوا ما أعجبكم أو ما يمكن تحسينه",
                submitFeedback: "إرسال التعليق",
                feedbackThanks: "شكراً على تعليقكم.",
                urgentBadge: "طلب مستعجل",
                urgentTitle: "هل تحتاجون المساعدة بسرعة؟",
                urgentIntro: "أرسلوا طلباً مستعجلاً ومختصراً وسنراجع التوفر أولاً.",
                urgentAvailabilityNote: "الطلبات المستعجلة تبقى حسب التوفر وقد يضاف لها رسم أولوية.",
                urgentFirstNameLabel: "الاسم الشخصي",
                urgentLastNameLabel: "النسب",
                urgentPhoneLabel: "رقم الهاتف",
                urgentEmailLabel: "البريد الإلكتروني",
                urgentCityLabel: "المدينة",
                urgentCityPrompt: "اختر المدينة",
                urgentServiceLabel: "الخدمة",
                urgentTimingLabel: "متى تحتاجون المساعدة؟",
                urgentNotesLabel: "ملاحظات",
                urgentNotesPlaceholder: "اكتب تفاصيل الحالة وأي ملاحظة تساعدنا نعالجو الطلب بسرعة",
                urgentNotesHelp: "المرجو ملء خانة الملاحظات لتسريع معالجة الطلب المستعجل.",
                urgentSubmitBtn: "إرسال الطلب المستعجل",
                urgentSuccessTitle: "تم إرسال الطلب المستعجل",
                urgentSuccessText: "سنراجع التوفر أولاً ونتواصل معكم سريعاً للتأكيد.",
                urgentOrderLabel: "المرجع",
                urgentBackStandard: "الحجز العادي",
                urgentBackHome: "العودة إلى الرئيسية",
                urgentServicePrompt: "اختر الخدمة",
                urgentTimingPrompt: "اختر درجة الاستعجال",
                urgentTimingNow: "في أقرب وقت ممكن",
                urgentTiming2Hours: "خلال ساعتين",
                urgentTimingToday: "في وقت لاحق اليوم",
                urgentTimingTonight: "هذه الليلة",
                urgentMissingFields: "المرجو إدخال الاسم الشخصي والنسب ورقم الهاتف والبريد الإلكتروني والمدينة والخدمة ودرجة الاستعجال والملاحظات.",
                urgentPhoneInvalid: "المرجو إدخال رقم هاتف مغربي صحيح.",
                urgentEmailInvalid: "المرجو إدخال بريد إلكتروني صحيح.",
                joinUsButton: "انضم إلينا",
                joinUsBadge: "نحن نوظف",
                joinUsTitle: "انضم إلى فريق CareVia",
                joinUsIntro: "املأ معلوماتك وأرسل طلبك، وسنراجعه ثم نرد عليك عبر البريد الإلكتروني.",
                joinUsNote: "تأكد من صحة معلوماتك وارفع السيرة الذاتية وصورة سيلفي واضحة.",
                joinFirstNameLabel: "الاسم الشخصي",
                joinLastNameLabel: "النسب",
                joinBirthDateLabel: "تاريخ الازدياد",
                joinResidenceLabel: "مكان الإقامة",
                joinAddressLabel: "العنوان",
                joinCityLabel: "المدينة",
                joinCityPrompt: "اختر المدينة",
                joinPhoneLabel: "رقم الهاتف",
                joinEmailLabel: "البريد الإلكتروني",
                joinEducationLevelLabel: "المستوى الدراسي",
                joinDiplomasLabel: "الدبلومات",
                joinCertificatesLabel: "الشواهد",
                joinFormationsLabel: "التكوينات",
                joinCvLabel: "ارفع السيرة الذاتية",
                joinSelfieLabel: "ارفع صورة سيلفي",
                joinNoFile: "لم يتم اختيار ملف",
                joinCurrentStatusLabel: "شنو كتدير دابا؟",
                joinCurrentStatusPrompt: "اختر وضعك الحالي",
                joinStatusStudent: "طالب",
                joinStatusWorking: "خدام",
                joinStatusOther: "وضع آخر",
                joinStudentStudyLabel: "إلى كنت طالب، شنو كتقرا؟",
                joinWorkerJobLabel: "إلى كنت خدام، شنو الخدمة ديالك دابا؟",
                joinJobTypeLabel: "بغيتيها خدمة رئيسية ولا part-time job؟",
                joinJobTypePrompt: "اختر نوع العمل",
                joinJobTypeMain: "خدمة رئيسية",
                joinJobTypePartTime: "Part-time job",
                joinSubmitBtn: "إرسال الطلب",
                joinSuccessTitle: "تم تسجيل الطلب",
                joinSuccessText: "تم تسجيل طلبك، وغادي نردو عليك فالإيميل اللي دخلتي.",
                joinBackHome: "الرجوع للرئيسية",
                joinMissingFields: "المرجو ملء جميع الخانات الضرورية ورفع السيرة الذاتية وصورة السيلفي.",
                joinPhoneInvalid: "المرجو إدخال رقم هاتف مغربي صحيح.",
                joinEmailInvalid: "المرجو إدخال بريد إلكتروني صحيح.",
                joinStudentStudyRequired: "المرجو كتابة شنو كتقرا.",
                joinWorkerJobRequired: "المرجو كتابة الخدمة اللي كتدير دابا.",
                placeholderFirstName: "مثال: أحمد",
                placeholderLastName: "مثال: بنعلي",
                placeholderPhone: "+212 6XX-XXXXXX أو 06XXXXXXXX",
                placeholderEmail: "example@mail.com"
            },
            fr: {
                years: "ans",
                selectedHoursLabel: "Heures sélectionnées :",
                liveEstimateTitle: "Estimation instantanée",
                liveEstimateHint: "Le montant se met à jour automatiquement selon les heures choisies.",
                liveEstimateEmpty: "Choisissez au moins une heure pour voir le montant estimé.",
                liveEstimateHours: "Heures choisies",
                liveEstimateRate: "Tarif",
                liveEstimateSubtotal: "Sous-total",
                liveEstimateSavings: "Réduction",
                liveEstimateTotal: "Total estimé",
                liveEstimatePerHour: "par heure",
                liveEstimateTravel: "Frais de déplacement",
                liveEstimateNight: "Frais de nuit",
                liveEstimateWeekend: "Frais week-end",
                flexibleHours: "Horaires flexibles",
                flexibleHoursDesc: "Choisissez les heures qui vous conviennent",
                trainedCaregivers: "Profils de soignants clairs",
                trainedCaregiversDesc: "Les profils des soignants sont présentés de manière claire",
                personalizedCare: "Soins personnalisés",
                personalizedCareDesc: "Les services sont adaptés aux besoins des personnes âgées",
                safetyFirst: "Sécurité d'abord",
                safetyFirstDesc: "Une expérience de réservation calme et rassurante",
                bioLabel: "Bio",
                tasksRatingsTitle: "Tâches réalisées et évaluations",
                skillsTitle: "Compétences et savoir-faire",
                backToCaregiversBtn: "Retour aux soignants",
                summaryService: "Service",
                summaryClient: "Client",
                summaryDate: "Date",
                summaryHours: "Heures",
                summaryCaregiver: "Soignant",
                summaryTotal: "Total",
                hourSingular: "heure",
                hourPlural: "heures",
                submitting: "Envoi...",
                feedbackTitle: "Comment s’est passée la réservation ?",
                feedbackHint: "Vous pouvez noter le parcours de réservation et laisser un court commentaire.",
                ratingLabel: "Votre note",
                commentLabel: "Votre commentaire",
                feedbackCommentPlaceholder: "Dites-nous ce qui vous a plu ou ce qu’on peut améliorer",
                submitFeedback: "Envoyer l’avis",
                feedbackThanks: "Merci pour votre retour.",
                urgentBadge: "Demande urgente",
                urgentTitle: "Besoin d’aide rapidement ?",
                urgentIntro: "Envoyez une demande urgente plus courte et nous vérifierons d’abord la disponibilité.",
                urgentAvailabilityNote: "Les demandes urgentes restent soumises à disponibilité et peuvent inclure un supplément de priorité.",
                urgentFirstNameLabel: "Prénom",
                urgentLastNameLabel: "Nom",
                urgentPhoneLabel: "Numéro de téléphone",
                urgentEmailLabel: "E-mail",
                urgentCityLabel: "Ville",
                urgentCityPrompt: "Choisissez une ville",
                urgentServiceLabel: "Service",
                urgentTimingLabel: "Quand avez-vous besoin d’aide ?",
                urgentNotesLabel: "Notes",
                urgentNotesPlaceholder: "Donnez les détails du cas et toute note utile pour accélérer le traitement",
                urgentNotesHelp: "Merci de remplir la zone notes pour accélérer le traitement de la demande urgente.",
                urgentSubmitBtn: "Envoyer la demande urgente",
                urgentSuccessTitle: "Demande urgente envoyée",
                urgentSuccessText: "Nous allons d’abord vérifier la disponibilité puis vous contacter rapidement pour confirmer.",
                urgentOrderLabel: "Référence",
                urgentBackStandard: "Réservation standard",
                urgentBackHome: "Retour à l’accueil",
                urgentServicePrompt: "Choisissez un service",
                urgentTimingPrompt: "Choisissez l’urgence",
                urgentTimingNow: "Dès que possible",
                urgentTiming2Hours: "Dans les 2 heures",
                urgentTimingToday: "Plus tard aujourd’hui",
                urgentTimingTonight: "Ce soir",
                urgentMissingFields: "Veuillez saisir le prénom, le nom, le téléphone, l’e-mail, la ville, le service, le niveau d’urgence et les notes.",
                urgentPhoneInvalid: "Veuillez saisir un numéro marocain valide.",
                urgentEmailInvalid: "Veuillez saisir une adresse e-mail valide.",
                joinUsButton: "Rejoignez-nous",
                joinUsBadge: "Nous recrutons",
                joinUsTitle: "Rejoignez l’équipe CareVia",
                joinUsIntro: "Remplissez vos informations et envoyez votre candidature. Nous l’étudierons puis nous répondrons par email.",
                joinUsNote: "Assurez-vous que vos informations sont correctes et ajoutez votre CV ainsi qu’une photo selfie claire.",
                joinFirstNameLabel: "Prénom",
                joinLastNameLabel: "Nom",
                joinBirthDateLabel: "Date de naissance",
                joinResidenceLabel: "Lieu de résidence",
                joinAddressLabel: "Adresse",
                joinCityLabel: "Ville",
                joinCityPrompt: "Choisissez une ville",
                joinPhoneLabel: "Téléphone",
                joinEmailLabel: "Email",
                joinEducationLevelLabel: "Niveau d’études",
                joinDiplomasLabel: "Diplômes",
                joinCertificatesLabel: "Certificats",
                joinFormationsLabel: "Formations",
                joinCvLabel: "Téléchargez votre CV",
                joinSelfieLabel: "Téléchargez une photo selfie",
                joinNoFile: "Aucun fichier sélectionné",
                joinCurrentStatusLabel: "Que faites-vous actuellement ?",
                joinCurrentStatusPrompt: "Choisissez votre situation actuelle",
                joinStatusStudent: "Étudiant",
                joinStatusWorking: "En emploi",
                joinStatusOther: "Autre",
                joinStudentStudyLabel: "Si vous êtes étudiant, qu’étudiez-vous ?",
                joinWorkerJobLabel: "Si vous travaillez, quel est votre poste actuel ?",
                joinJobTypeLabel: "Cherchez-vous un emploi principal ou un temps partiel ?",
                joinJobTypePrompt: "Choisissez le type de poste",
                joinJobTypeMain: "Emploi principal",
                joinJobTypePartTime: "Temps partiel",
                joinSubmitBtn: "Envoyer la candidature",
                joinSuccessTitle: "Candidature reçue",
                joinSuccessText: "Votre candidature a été enregistrée. Nous vous répondrons à l’adresse email saisie.",
                joinBackHome: "Retour à l’accueil",
                joinMissingFields: "Veuillez remplir tous les champs requis et ajouter le CV ainsi que le selfie.",
                joinPhoneInvalid: "Veuillez saisir un numéro marocain valide.",
                joinEmailInvalid: "Veuillez saisir une adresse email valide.",
                joinStudentStudyRequired: "Merci d’indiquer ce que vous étudiez.",
                joinWorkerJobRequired: "Merci d’indiquer votre poste actuel.",
                placeholderFirstName: "ex. Ahmed",
                placeholderLastName: "ex. Benali",
                placeholderPhone: "+212 6XX-XXXXXX ou 06XXXXXXXX",
                placeholderEmail: "example@mail.com"
            }
        };

        const caregiverI18n = {
            mohamedAyoub: {
                en: {
                    occupation: "Student (Nursing)",
                    bio: "Mohamed Ayoub is a student with a strong interest in elder care. He offers attentive support, companionship, and practical help in a calm and respectful way.",
                    tasks: ["Home care assistance", "Medical appointment accompaniment", "Companionship & conversation"],
                    skills: ["Medication reminders", "Mobility support", "First aid", "Patient listener"]
                },
                ar: {
                    occupation: "طالب في التمريض",
                    bio: "محمد أيوب طالب مهتم برعاية كبار السن. يقدم دعماً عملياً ومرافقة إنسانية بطريقة هادئة ومحترمة.",
                    tasks: ["مساعدة في الرعاية المنزلية", "مرافقة للمواعيد الطبية", "رفقة ومحادثة"],
                    skills: ["تذكير بالأدوية", "دعم الحركة", "إسعافات أولية", "إنصات جيد"]
                },
                fr: {
                    occupation: "Étudiant en soins infirmiers",
                    bio: "Mohamed Ayoub est un étudiant intéressé par la prise en charge des personnes âgées. Il offre un accompagnement attentif, humain et respectueux.",
                    tasks: ["Aide aux soins à domicile", "Accompagnement aux rendez-vous médicaux", "Compagnie et conversation"],
                    skills: ["Rappels de médicaments", "Aide à la mobilité", "Premiers secours", "Écoute attentive"]
                }
            },
            mohamedReda: {
                en: {
                    occupation: "Student (Psychology)",
                    bio: "Reda combines his studies with a natural ability to connect with elders. He focuses on emotional well-being, conversation, and reassuring daily support.",
                    tasks: ["Companionship", "Personal care", "Light housekeeping"],
                    skills: ["Active listening", "Memory games", "Cooking", "Patience"]
                },
                ar: {
                    occupation: "طالب في علم النفس",
                    bio: "يجمع رضا بين دراسته وقدرته الطبيعية على التواصل مع كبار السن. يركز على الراحة النفسية والمحادثة والدعم اليومي المطمئن.",
                    tasks: ["رفقة", "عناية شخصية", "أعمال منزلية خفيفة"],
                    skills: ["الإنصات الفعال", "ألعاب الذاكرة", "الطبخ", "الصبر"]
                },
                fr: {
                    occupation: "Étudiant en psychologie",
                    bio: "Reda combine ses études avec une grande facilité à créer du lien avec les personnes âgées. Il se concentre sur le bien-être émotionnel et l'accompagnement quotidien rassurant.",
                    tasks: ["Compagnie", "Soins personnels", "Tâches ménagères légères"],
                    skills: ["Écoute active", "Jeux de mémoire", "Cuisine", "Patience"]
                }
            },
            fatimaZahra: {
                en: {
                    occupation: "Registered Nurse",
                    bio: "Fatima is an experienced nurse in elder support. She excels in medical follow-up, daily monitoring, and reassuring families.",
                    tasks: ["Medical accompaniment", "Wound care", "Medication management"],
                    skills: ["Wound care", "Vital monitoring", "Diabetes management", "Professional follow-up"]
                },
                ar: {
                    occupation: "ممرضة معتمدة",
                    bio: "فاطمة ممرضة ذات خبرة في مرافقة كبار السن. تتميز بالمتابعة الطبية اليومية وطمأنة العائلات.",
                    tasks: ["مرافقة طبية", "العناية بالجروح", "تدبير الأدوية"],
                    skills: ["العناية بالجروح", "مراقبة المؤشرات الحيوية", "تدبير السكري", "متابعة مهنية"]
                },
                fr: {
                    occupation: "Infirmière diplômée",
                    bio: "Fatima est une infirmière expérimentée dans l'accompagnement des personnes âgées. Elle se distingue par le suivi médical quotidien et la capacité à rassurer les familles.",
                    tasks: ["Accompagnement médical", "Soins de plaies", "Gestion des médicaments"],
                    skills: ["Soins de plaies", "Suivi des constantes", "Gestion du diabète", "Suivi professionnel"]
                }
            },
            youssefBenz: {
                en: {
                    occupation: "Certified nursing assistant",
                    bio: "Youssef is patient, practical, and comfortable helping clients who need physical support in daily routines.",
                    tasks: ["Mobility assistance", "Bathing & grooming", "Exercise supervision"],
                    skills: ["Transfer techniques", "Fall prevention", "Daily assistance", "Compassion"]
                },
                ar: {
                    occupation: "مساعد تمريض معتمد",
                    bio: "يوسف صبور وعملي ومناسب لمساعدة العملاء الذين يحتاجون إلى دعم بدني في الروتين اليومي.",
                    tasks: ["مساعدة في الحركة", "الاستحمام والعناية الشخصية", "الإشراف على التمارين"],
                    skills: ["تقنيات النقل", "الوقاية من السقوط", "مساعدة يومية", "تعاطف"]
                },
                fr: {
                    occupation: "Aide-soignant certifié",
                    bio: "Youssef est patient, pratique et à l'aise avec les clients qui ont besoin d'un soutien physique dans la routine quotidienne.",
                    tasks: ["Aide à la mobilité", "Toilette et soins d'hygiène", "Supervision des exercices"],
                    skills: ["Techniques de transfert", "Prévention des chutes", "Aide quotidienne", "Compassion"]
                }
            }
        };

        function dt(key) {
            return (dynamicTexts[currentLang] && dynamicTexts[currentLang][key]) || (dynamicTexts.en && dynamicTexts.en[key]) || key;
        }

        function getServiceName(serviceKey) {
            const map = {
                homeCare: translations[currentLang].serviceHome,
                medicalAcc: translations[currentLang].serviceMedical,
                personalCare: translations[currentLang].servicePersonal,
                companionship: translations[currentLang].serviceCompanion
            };
            return map[serviceKey] || serviceNames[serviceKey] || serviceKey;
        }

        function getLocalizedCaregiver(key) {
            const base = caregivers[key];
            const local = (caregiverI18n[key] && (caregiverI18n[key][currentLang] || caregiverI18n[key].en)) || {};
            return {
                ...base,
                ...local,
                tasks: (base.tasks || []).map((taskObj, index) => ({
                    ...taskObj,
                    task: (local.tasks && local.tasks[index]) || taskObj.task
                })),
                skills: local.skills || base.skills
            };
        }

        function ageOccupationLocationLine(c) {
            return `${c.age} ${dt('years')} • ${c.occupation} • ${c.location}`;
        }

        function applyFormPlaceholders() {
            const p1 = document.getElementById('clientFirstName');
            const p2 = document.getElementById('clientLastName');
            const p3 = document.getElementById('clientPhone');
            const p4 = document.getElementById('clientEmail');
            if (p1) p1.placeholder = dt('placeholderFirstName');
            if (p2) p2.placeholder = dt('placeholderLastName');
            if (p3) p3.placeholder = dt('placeholderPhone');
            if (p4) p4.placeholder = dt('placeholderEmail');
        }

        function applyI18nToAll() {
            if (!currentLang) return;
            document.body.classList.toggle('rtl', currentLang === 'ar');
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                const value = getI18nValue(currentLang, key);
                if (value) {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.placeholder = value;
                    } else {
                        el.textContent = value;
                    }
                }
            });
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                const value = getI18nValue(currentLang, key);
                if (value) el.placeholder = value;
            });
        }

        function rerenderDynamicContent() {
            applyFormPlaceholders();
            loadCaregiversList();
            if (selectedService && document.getElementById('serviceDetailContent') && document.getElementById('serviceDetailContent').innerHTML.trim()) {
                renderServiceDetail(selectedService);
            }
            if (window.lastViewedCaregiverId && document.getElementById('caregiverProfileContent') && document.getElementById('caregiverProfileContent').innerHTML.trim()) {
                renderCaregiverProfile(window.lastViewedCaregiverId);
            }
            if (document.getElementById('chooseCaregiverList') && document.getElementById('chooseCaregiverList').innerHTML.trim()) {
                renderChooseCaregiverList();
            }
            updatePaymentSummary();
            updateLivePriceEstimate();
            // Apply translations LAST so they override any dynamic content rendering
            applyI18nToAll();
        }


        function getI18nValue(lang, key) {
            return (translations[lang] && translations[lang][key])
                || (dynamicTexts[lang] && dynamicTexts[lang][key])
                || (translations.en && translations.en[key])
                || (dynamicTexts.en && dynamicTexts.en[key])
                || null;
        }

        function setLanguage(lang) {
            currentLang = lang;
            localStorage.setItem('careviaLanguage', lang);
            document.documentElement.lang = lang;
            document.querySelectorAll('.lang-btn').forEach(btn => {
                if (btn.dataset.lang === lang) btn.classList.add('active');
                else btn.classList.remove('active');
            });
            document.body.classList.toggle('rtl', lang === 'ar');
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                const value = getI18nValue(lang, key);
                if (value) {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.placeholder = value;
                    } else {
                        el.textContent = value;
                    }
                }
            });
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                const value = getI18nValue(lang, key);
                if (value) {
                    el.placeholder = value;
                }
            });
            const slotsDisplay = document.getElementById('selectedSlotsDisplay');
            if (slotsDisplay && selectedSlots.length === 0) {
                slotsDisplay.innerText = getI18nValue(lang, 'noHours') || translations[lang].noHours;
            } else if (slotsDisplay && selectedSlots.length > 0) {
                slotsDisplay.innerHTML = '<strong>' + dt('selectedHoursLabel') + '</strong> ' + selectedSlots.join(' · ');
            }
            rerenderDynamicContent();
        }

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
        });

        // Theme toggle
        function toggleTheme() {
            const isDark = document.body.classList.toggle('dark-mode');
            const icon = document.querySelectorAll('.theme-btn i');
            icon.forEach(i => {
                i.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
            });
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }

        function initTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-mode');
                document.querySelectorAll('.theme-btn i').forEach(i => i.className = 'fas fa-sun');
            } else {
                document.querySelectorAll('.theme-btn i').forEach(i => i.className = 'fas fa-moon');
            }
        }

        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', toggleTheme);
        });

        initTheme();

        // ---------- POPUP MODAL ----------
        function showPopup(message) {
            document.getElementById('popupMessage').innerText = message;
            document.getElementById('popupModal').style.display = 'flex';
        }

        function closePopup() {
            document.getElementById('popupModal').style.display = 'none';
        }

        // ---------- HISTORY MANAGEMENT ----------

        function toggleGlobalHomeFooter(viewId) {
            document.body.classList.toggle('home-view-active', viewId === 'homeView');
        }

        let viewHistory = [];

        function navigateTo(viewId, pushHistory = true) {
            document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
            const targetView = document.getElementById(viewId);
            if (!targetView) return;
            targetView.classList.add('active-view');
            toggleGlobalHomeFooter(viewId);

            if (pushHistory) {
                history.pushState({ view: viewId }, '', window.location.pathname + window.location.search);
                viewHistory.push(viewId);
            }

            if (viewId === 'clientInfoView') {
                // Reset to step 1
                var s1 = document.getElementById('ciStep1');
                var s2 = document.getElementById('ciStep2');
                if (s1) s1.style.display = '';
                if (s2) s2.style.display = 'none';
                var d1 = document.getElementById('ciStep1Dot');
                var d2 = document.getElementById('ciStep2Dot');
                if (d1) d1.style.background = 'var(--accent-dark)';
                if (d2) d2.style.background = 'var(--border-color)';
                setTimeout(function() {
                    var _sess = (function(){ try{ return JSON.parse(localStorage.getItem('careviaSession')||'null'); }catch(e){ return null; } })();
                    function _applyAutofill(s) {
                        if (!s || !(s.fn||s.firstName||s.email)) return;
                        var lockStyle = 'background:var(--accent-light);color:var(--text-color);opacity:0.82;cursor:not-allowed;pointer-events:none;';
                        var fEl=document.getElementById('clientFirstName'), lEl=document.getElementById('clientLastName');
                        var phEl=document.getElementById('clientPhone'), emEl=document.getElementById('clientEmail');
                        var cityEl=document.getElementById('clientCity');
                        var fn=s.fn||s.firstName||'', ln=s.ln||s.lastName||'', ph=s.phone||'', em=s.email||'', cy=s.city||'';
                        if(fEl&&fn){ fEl.value=fn; fEl.setAttribute('readonly','readonly'); fEl.setAttribute('style',lockStyle); }
                        if(lEl&&ln){ lEl.value=ln; lEl.setAttribute('readonly','readonly'); lEl.setAttribute('style',lockStyle); }
                        if(phEl&&ph){ phEl.value=ph; phEl.setAttribute('readonly','readonly'); phEl.setAttribute('style',lockStyle); }
                        if(emEl&&em){ emEl.value=em; emEl.setAttribute('readonly','readonly'); emEl.setAttribute('style',lockStyle); }
                        if(cityEl&&cy){ cityEl.value=cy; }
                    }
                    if (_sess) {
                        var needsFresh = !_sess.phone || !_sess.city;
                        if(needsFresh && window.cvFirebaseDb && (_sess.uid||_sess.id)) {
                            window.cvFirebaseDb.collection('users').doc(_sess.uid||_sess.id).get().then(function(doc){
                                if(doc&&doc.exists){
                                    var d=doc.data()||{};
                                    var refreshed=Object.assign({},_sess,{fn:d.fn||d.firstName||_sess.fn||'',ln:d.ln||d.lastName||_sess.ln||'',phone:d.phone||_sess.phone||'',city:d.city||_sess.city||'',photo:d.photo||_sess.photo||''});
                                    try{ localStorage.setItem('careviaSession',JSON.stringify(refreshed)); }catch(e){}
                                    _applyAutofill(refreshed);
                                } else { _applyAutofill(_sess); }
                            }).catch(function(){ _applyAutofill(_sess); });
                        } else { _applyAutofill(_sess); }
                    } else {
                        ['clientFirstName','clientLastName','clientPhone','clientEmail'].forEach(function(id){
                            var el=document.getElementById(id);
                            if(el){ el.removeAttribute('readonly'); el.removeAttribute('style'); }
                        });
                    }
                }, 0);
            }
            if (viewId === 'timeSlotView') {
                setMinDate();
                generateHourSlots();
            }
            if (viewId === 'paymentMethodView') {
                updatePaymentSummary();
            }
            if (viewId === 'caregiversListView') {
                loadCaregiversList();
            }
            rerenderDynamicContent();

            // Update luxury progress bar
            (function updateProgressBar(vid) {
              const viewOrder = [
                'serviceSelectionView',
                'clientInfoView',
                'timeSlotView',
                'chooseCaregiverView',
                'paymentMethodView',
                'bookingSummaryView',
                'confirmationView'
              ];
              const bar = document.getElementById('cvProgressBar');
              if (!bar) return;
              const idx = viewOrder.indexOf(vid);
              if (idx === -1) {
                bar.classList.remove('visible');
                return;
              }
              bar.classList.add('visible');
              for (let i = 1; i <= 7; i++) {
                const step = document.getElementById('cvStep' + i);
                if (!step) continue;
                step.classList.remove('active', 'done');
                if (i - 1 < idx) step.classList.add('done');
                else if (i - 1 === idx) step.classList.add('active');
              }
              for (let i = 1; i <= 6; i++) {
                const conn = document.getElementById('cvConn' + i);
                if (!conn) continue;
                conn.classList.toggle('done', i <= idx);
              }
            })(viewId);

            requestAnimationFrame(() => {
                targetView.scrollIntoView({ block: 'start', behavior: 'auto' });
                window.scrollTo({ top: 0, behavior: 'auto' });
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
                // Re-apply i18n AFTER scroll/render to ensure new page content is translated
                setTimeout(() => { if (typeof applyI18nToAll === 'function') applyI18nToAll(); }, 0);
            });
        }

        window.addEventListener('popstate', function(event) {
            if (event.state && event.state.view) {
                navigateTo(event.state.view, false);
                if (viewHistory.length > 0) viewHistory.pop();
            } else {
                navigateTo('homeView', false);
            }
        });

        window.addEventListener('load', function() {
            history.replaceState({ view: 'homeView' }, '', window.location.pathname + window.location.search);
            viewHistory = ['homeView'];
            loadCaregiversList();
            hydrateContactInfo();
            initFaq();
            initFloatingActions();
            const savedLanguage = localStorage.getItem('careviaLanguage') || 'en';
            setLanguage(savedLanguage);
            toggleGlobalHomeFooter('homeView');
        });

        // ---------- BOOKING STATE AND FUNCTIONS ----------
        const serviceNames = {
            homeCare: 'Home Care',
            medicalAcc: 'Medical Accompaniment',
            personalCare: 'Personal Care',
            companionship: 'Companionship'
        };

        const serviceIcons = {
            homeCare: 'fa-home',
            medicalAcc: 'fa-ambulance',
            personalCare: 'fa-hand-holding-heart',
            companionship: 'fa-heart'
        };

        const caregivers = {
            mohamedAyoub: {
                name: 'Mohamed Ayoub Abinayach',
                age: 21,
                occupation: 'Student (Nursing)',
                location: 'Casablanca',
                rating: 4.7,
                bio: 'Mohamed Ayoub is a second-year nursing student with a passion for geriatric care. He has volunteered at local senior centers and provides empathetic, attentive support.',
                tasks: [
                    { task: 'Home care assistance', rating: 4.8 },
                    { task: 'Medical appointment accompaniment', rating: 4.6 },
                    { task: 'Companionship & conversation', rating: 4.9 }
                ],
                skills: ['Medication reminders', 'Mobility support', 'First aid', 'Patient listener'],
                img: AYOUB_IMAGE
            },
            mohamedReda: {
                name: 'Mohamed Reda Saidi',
                age: 21,
                occupation: 'Student (Psychology)',
                location: 'Rabat',
                rating: 4.6,
                bio: 'Reda combines his psychology studies with a natural ability to connect with elders. He focuses on mental well-being and engaging activities.',
                tasks: [
                    { task: 'Companionship', rating: 4.9 },
                    { task: 'Personal care', rating: 4.5 },
                    { task: 'Light housekeeping', rating: 4.5 }
                ],
                skills: ['Active listening', 'Memory games', 'Cooking', 'Patience'],
                img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
            },
            fatimaZahra: {
                name: 'Fatima Zahra El Omari',
                age: 35,
                occupation: 'Registered Nurse',
                location: 'Marrakech',
                rating: 4.9,
                bio: 'Fatima is an experienced nurse with 10 years in geriatric care. She excels in post-operative care and chronic condition management.',
                tasks: [
                    { task: 'Medical accompaniment', rating: 5.0 },
                    { task: 'Wound care', rating: 4.9 },
                    { task: 'Medication management', rating: 5.0 }
                ],
                skills: ['Wound care', 'Catheter care', 'Vital monitoring', 'Diabetes management'],
                img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
            },
            youssefBenz: {
                name: 'Youssef Benzaid',
                age: 28,
                occupation: 'Certified nursing assistant',
                location: 'Agadir',
                rating: 4.8,
                bio: 'Youssef is patient and strong, ideal for clients needing transfer assistance. He has 5 years of home care experience.',
                tasks: [
                    { task: 'Mobility assistance', rating: 4.9 },
                    { task: 'Bathing & grooming', rating: 4.8 },
                    { task: 'Exercise supervision', rating: 4.7 }
                ],
                skills: ['Lifting techniques', 'Fall prevention', 'Physiotherapy exercises', 'Compassionate'],
                img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
            }
        };

        let selectedService = 'homeCare';
        let clientInfo = {};
        let selectedDate = '';
        let selectedSlots = [];
        let selectedCaregiverKey = null;

        function loadCaregiversList() {
            const container = document.getElementById('caregiversListContainer');
            if (container) {
                container.innerHTML = '';
                for (let [key] of Object.entries(caregivers)) {
                    const c = getLocalizedCaregiver(key);
                    const card = document.createElement('div');
                    card.className = 'caregiver-card';
                    card.onclick = () => showCaregiverProfile(key);
                    card.innerHTML = `
                        <div class="photo-placeholder"><img src="${c.img}" alt="${c.name}" onerror="this.src='https://via.placeholder.com/130?text=User'"></div>
                        <h3>${c.name}</h3>
                        <p>${ageOccupationLocationLine(c)}</p>
                        <div class="rating">${'★'.repeat(Math.floor(c.rating))}${c.rating % 1 >= 0.5 ? '½' : ''} ${c.rating}/5</div>
                    `;
                    container.appendChild(card);
                }
            }
        }

        function renderCaregiverProfile(id) {
            const profileDiv = document.getElementById('caregiverProfileContent');
            const c = getLocalizedCaregiver(id);
            if (!profileDiv || !c) return;
            let tasksHtml = '';
            c.tasks.forEach(t => {
                tasksHtml += `<div class="task-item" style="margin:0.5rem 0"><span>${t.task}</span> <span class="rating">${'★'.repeat(Math.floor(t.rating))}${t.rating%1? '½':''} ${t.rating}</span></div>`;
            });
            let skillsHtml = c.skills.map(s => `<span style="display:inline-block; background:var(--accent-light); padding:0.3rem 0.8rem; border-radius:40px; margin:0.3rem;">${s}</span>`).join('');
            profileDiv.innerHTML = `
                <div style="display:flex; flex-wrap:wrap; gap:2rem;">
                    <div style="flex:1; min-width:200px;"><div class="photo-placeholder" style="width:150px;height:150px;"><img src="${c.img}" alt="${c.name}" onerror="this.src='https://via.placeholder.com/150?text=User'"></div></div>
                    <div style="flex:3;"><h2>${c.name}</h2><p>${ageOccupationLocationLine(c)}</p><div class="rating">${'★'.repeat(Math.floor(c.rating))}${c.rating%1>=0.5?'½':''} ${c.rating}/5</div>
                    <p style="margin:1rem 0;"><strong>${dt('bioLabel')}:</strong> ${c.bio}</p></div>
                </div>
                <hr style="margin:1.5rem 0"><h3>${dt('tasksRatingsTitle')}</h3>${tasksHtml}
                <h3 style="margin-top:1.5rem;">${dt('skillsTitle')}</h3><div class="skills-tags" style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:0.5rem;">${skillsHtml}</div>
                <div style="text-align:center; margin-top:2rem;"><button class="btn" onclick="navigateTo('caregiversListView')">${dt('backToCaregiversBtn')}</button></div>
            `;
        }

        function showCaregiverProfile(id) {
            window.lastViewedCaregiverId = id;
            renderCaregiverProfile(id);
            navigateTo('caregiverProfileView');
        }
        window.showCaregiverProfile = showCaregiverProfile;

        function showServiceSelection() {
            navigateTo('serviceSelectionView');
        }
        window.showServiceSelection = showServiceSelection;

        function selectServiceAndContinue(serviceKey) {
            selectedService = serviceKey;
            navigateTo('clientInfoView');
        }
        window.selectServiceAndContinue = selectServiceAndContinue;

        function renderServiceDetail(serviceKey) {
            const contentDiv = document.getElementById('serviceDetailContent');
            if (!contentDiv) return;
            const service = getServiceName(serviceKey);
            const icon = serviceIcons[serviceKey];
            const features = [
                { icon: 'fa-clock', title: dt('flexibleHours'), desc: dt('flexibleHoursDesc') },
                { icon: 'fa-user-check', title: dt('trainedCaregivers'), desc: dt('trainedCaregiversDesc') },
                { icon: 'fa-heart', title: dt('personalizedCare'), desc: dt('personalizedCareDesc') },
                { icon: 'fa-shield-alt', title: dt('safetyFirst'), desc: dt('safetyFirstDesc') }
            ];
            let featuresHtml = '';
            features.forEach(f => {
                featuresHtml += `
                    <div class="feature-item">
                        <i class="fas ${f.icon}"></i>
                        <h3>${f.title}</h3>
                        <p>${f.desc}</p>
                    </div>
                `;
            });
            let description = '';
            switch(serviceKey) {
                case 'homeCare':
                    description = translations[currentLang].serviceHomeDetail;
                    break;
                case 'medicalAcc':
                    description = translations[currentLang].medicalDetail;
                    break;
                case 'personalCare':
                    description = translations[currentLang].personalDetail;
                    break;
                case 'companionship':
                    description = translations[currentLang].companionDetail;
                    break;
            }
            contentDiv.innerHTML = `
                <div class="service-icon-large"><i class="fas ${icon}"></i></div>
                <div class="service-detail-header">
                    <h1>${service}</h1>
                    <p class="service-description">${description}</p>
                </div>
                <div class="service-features">
                    ${featuresHtml}
                </div>
                <div class="book-section">
                    <button class="btn" onclick="selectServiceAndContinue('${serviceKey}')">${translations[currentLang].bookThisService}</button>
                </div>
            `;
        }

        function showServiceDetail(serviceKey) {
            selectedService = serviceKey;
            renderServiceDetail(serviceKey);
            navigateTo('serviceDetailView');
        }
        window.showServiceDetail = showServiceDetail;

        function startBookingFlow() {
            showServiceSelection();
        }
        window.startBookingFlow = startBookingFlow;

        function validateAndSaveClientInfo() {
            const firstName = document.getElementById('clientFirstName').value.trim();
            const lastName = document.getElementById('clientLastName').value.trim();
            const phone = document.getElementById('clientPhone').value.trim();
            const email = document.getElementById('clientEmail').value.trim();

            if (!firstName || !lastName) {
                showPopup(translations[currentLang].validationName);
                return;
            }
            if (!phone) {
                showPopup(translations[currentLang].validationPhone);
                return;
            }
            const cleanedPhone = phone.replace(/\s/g, '');
            if (!cleanedPhone.match(/^(\+212[5-7]\d{8})$|^(0[5-7]\d{8})$/)) {
                showPopup(translations[currentLang].validationPhone);
                return;
            }
            if (!email || !email.includes('@') || !email.includes('.')) {
                showPopup(translations[currentLang].validationEmail);
                return;
            }

            clientInfo = {
                firstName: firstName,
                lastName: lastName,
                city: document.getElementById('clientCity').value,
                neighborhood: (document.getElementById('clientNeighborhood')?.value||'').trim(),
                phone: cleanedPhone,
                email: email
            };
            selectedSlots = [];
            navigateTo('timeSlotView');
        }
        window.validateAndSaveClientInfo = validateAndSaveClientInfo;

        /* ── City → map coords ── */
        var _ciCityCoords = {
            'Tangier':    [35.7595, -5.8340],
            'Casablanca': [33.5731, -7.5898],
            'Rabat':      [33.9716, -6.8498],
            'Fes':        [34.0181, -5.0078],
            'Marrakech':  [31.6295, -7.9811],
            'Agadir':     [30.4278, -9.5981],
            'Meknes':     [33.8935, -5.5547],
            'Oujda':      [34.6814, -1.9086],
            'Kenitra':    [34.2610, -6.5802],
            'Tetouan':    [35.5785, -5.3684],
            'Safi':       [32.2994, -9.2372],
            'El Jadida':  [33.2316, -8.5007],
            'Nador':      [35.1740, -2.9287],
            'Beni Mellal':[32.3369, -6.3498],
            'Larache':    [35.1932, -6.1561]
        };
        function ciGetMapSrc(city, zoom) {
            zoom = zoom || 13;
            var coords = _ciCityCoords[city] || [33.5731, -7.5898];
            var lat = coords[0], lon = coords[1];
            return 'https://www.openstreetmap.org/export/embed.html?bbox=' +
                (lon-0.04) + '%2C' + (lat-0.03) + '%2C' + (lon+0.04) + '%2C' + (lat+0.03) +
                '&layer=mapnik&marker=' + lat + '%2C' + lon;
        }
        window.ciUpdateMapCity = function() {
            var city = document.getElementById('clientCity')?.value || 'Casablanca';
            var frame = document.getElementById('ciMapFrame');
            if (frame) frame.src = ciGetMapSrc(city);
            var addr = document.getElementById('ciMapAddress');
            if (addr) addr.textContent = '';
        };
        window.ciGoToStep1 = function() {
            document.getElementById('ciStep1').style.display = '';
            document.getElementById('ciStep2').style.display = 'none';
            document.getElementById('ciStep1Dot').style.background = 'var(--accent-dark)';
            document.getElementById('ciStep2Dot').style.background = 'var(--border-color)';
        };
        window.ciGoToStep2 = function() {
            // Validate step 1 first
            var fn = (document.getElementById('clientFirstName')?.value||'').trim();
            var ln = (document.getElementById('clientLastName')?.value||'').trim();
            var ph = (document.getElementById('clientPhone')?.value||'').trim();
            var em = (document.getElementById('clientEmail')?.value||'').trim();
            if (!fn || !ln) { showPopup(translations[currentLang].validationName); return; }
            if (!ph) { showPopup(translations[currentLang].validationPhone); return; }
            var cleanedPhone = ph.replace(/\s/g, '');
            if (!cleanedPhone.match(/^(\+212[5-7]\d{8})$|^(0[5-7]\d{8})$/)) { showPopup(translations[currentLang].validationPhone); return; }
            if (!em || !em.includes('@') || !em.includes('.')) { showPopup(translations[currentLang].validationEmail); return; }
            // Show step 2 + load map
            document.getElementById('ciStep1').style.display = 'none';
            document.getElementById('ciStep2').style.display = '';
            document.getElementById('ciStep1Dot').style.background = 'var(--accent-dark)';
            document.getElementById('ciStep2Dot').style.background = 'var(--accent-dark)';
            // Load map for current city
            var city = document.getElementById('clientCity')?.value || 'Casablanca';
            var frame = document.getElementById('ciMapFrame');
            if (frame && !frame.src.includes('openstreetmap')) frame.src = ciGetMapSrc(city);
        };

        function setMinDate() {
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('slotDate').setAttribute('min', today);
            document.getElementById('slotDate').value = today;
        }

        function generateHourSlots() {
            const container = document.getElementById('hoursContainer');
            container.innerHTML = '';
            for (let i = 0; i < 24; i++) {
                const startHour = i;
                const endHour = i + 1;
                const startStr = startHour.toString().padStart(2,'0') + ':00';
                const endStr = endHour === 24 ? '00:00' : endHour.toString().padStart(2,'0') + ':00';
                const slotLabel = `${startStr} – ${endStr}`;
                const div = document.createElement('div');
                div.className = 'hour-option';
                if (selectedSlots.includes(slotLabel)) div.classList.add('selected');
                div.textContent = slotLabel;
                div.dataset.slot = slotLabel;
                div.onclick = () => toggleHourOption(div);
                container.appendChild(div);
            }
            updateSelectedSlotsDisplay();
            updateLivePriceEstimate();
        }

        const BOOKING_PRICING = {
            defaultHourlyRate: 50
        };

        function getHourlyRate() {
            return BOOKING_PRICING.defaultHourlyRate;
        }

        function getPricingDetails(hours) {
            const hourlyRate = getHourlyRate();
            const subtotal = hours * hourlyRate;
            const total = calculateTotalPrice(hours);
            const savings = Math.max(subtotal - total, 0);
            return { hourlyRate, subtotal, savings, total };
        }

        function updateLivePriceEstimate() {
            const box = document.getElementById('livePriceEstimate');
            if (!box) return;

            const totalHours = selectedSlots.length;
            const { hourlyRate, subtotal, savings, total } = getPricingDetails(totalHours);
            const hourLabel = totalHours === 1 ? dt('hourSingular') : dt('hourPlural');

            if (totalHours === 0) {
                box.innerHTML = `
                    <div class="price-live-header">
                        <div class="price-live-title">${dt('liveEstimateTitle')}</div>
                    </div>
                    <div class="price-live-note">${dt('liveEstimateHint')}</div>
                    <div class="price-live-item">
                        <div class="price-live-value">${dt('liveEstimateEmpty')}</div>
                    </div>
                `;
                return;
            }

            box.innerHTML = `
                <div class="price-live-header">
                    <div class="price-live-title">${dt('liveEstimateTitle')}</div>
                </div>
                <div class="price-live-note">${dt('liveEstimateHint')}</div>
                <div class="price-live-grid">
                    <div class="price-live-item">
                        <div class="price-live-label">${dt('liveEstimateHours')}</div>
                        <div class="price-live-value">${totalHours} ${hourLabel}</div>
                    </div>
                    <div class="price-live-item">
                        <div class="price-live-label">${dt('liveEstimateRate')}</div>
                        <div class="price-live-value">${hourlyRate.toFixed(2)} MAD ${dt('liveEstimatePerHour')}</div>
                    </div>
                    <div class="price-live-item">
                        <div class="price-live-label">${dt('liveEstimateSubtotal')}</div>
                        <div class="price-live-value">${subtotal.toFixed(2)} MAD</div>
                    </div>
                    <div class="price-live-item">
                        <div class="price-live-label">${dt('liveEstimateSavings')}</div>
                        <div class="price-live-value">${savings.toFixed(2)} MAD</div>
                    </div>
                </div>
                <div class="price-live-total">
                    <strong>${dt('liveEstimateTotal')}</strong>
                    <span>${total.toFixed(2)} MAD</span>
                </div>
            `;
        }

        function toggleHourOption(el) {
            const slot = el.dataset.slot;
            if (el.classList.contains('selected')) {
                el.classList.remove('selected');
                selectedSlots = selectedSlots.filter(s => s !== slot);
            } else {
                el.classList.add('selected');
                selectedSlots.push(slot);
            }
            updateSelectedSlotsDisplay();
            updateLivePriceEstimate();
        }

        function updateSelectedSlotsDisplay() {
            const displayDiv = document.getElementById('selectedSlotsDisplay');
            if (selectedSlots.length === 0) {
                displayDiv.innerText = translations[currentLang].noHours;
            } else {
                displayDiv.innerHTML = '<strong>' + (currentLang === 'ar' ? 'الساعات المحددة:' : (currentLang === 'fr' ? 'Heures sélectionnées:' : 'Selected hours:')) + '</strong> ' + selectedSlots.join(' · ');
            }
        }


        function renderChooseCaregiverList() {
            const container = document.getElementById('chooseCaregiverList');
            if (!container) return;
            container.innerHTML = '';
            for (let [key] of Object.entries(caregivers)) {
                const c = getLocalizedCaregiver(key);
                const card = document.createElement('div');
                card.className = 'caregiver-card';
                card.style.cursor = 'pointer';
                card.innerHTML = `
                    <div class="photo-placeholder"><img src="${c.img}" alt="${c.name}" onerror="this.src='https://via.placeholder.com/130?text=User'"></div>
                    <h3>${c.name}</h3>
                    <p>${ageOccupationLocationLine(c)}</p>
                    <div class="rating">⭐ ${c.rating}/5</div>
                `;
                card.onclick = () => selectCaregiver(key);
                container.appendChild(card);
            }
        }

        function confirmTimeSlot() {
            selectedDate = document.getElementById('slotDate').value;
            if (!selectedDate) {
                showPopup(translations[currentLang].validationDate);
                return;
            }
            if (selectedSlots.length === 0) {
                showPopup(translations[currentLang].validationHours);
                return;
            }
            renderChooseCaregiverList();
            navigateTo('chooseCaregiverView');
        }
        window.confirmTimeSlot = confirmTimeSlot;

        function selectCaregiver(key) {
            selectedCaregiverKey = key;
            navigateTo('paymentMethodView');
        }
        window.selectCaregiver = selectCaregiver;

        function calculateTotalPrice(hours) {
            if (hours <= 0) return 0;
            const basePrice = hours * getHourlyRate();
            let discountFactor = Math.min(0.15 * (hours - 1), 0.5);
            let total = basePrice * (1 - discountFactor);
            return Math.max(total, 0);
        }

        function updatePaymentSummary() {
            const c = selectedCaregiverKey ? getLocalizedCaregiver(selectedCaregiverKey) : null;
            const summary = document.getElementById('paymentSummary');
            if (!c || !summary) return;
            const totalHours = selectedSlots.length;
            const { hourlyRate, travelFee, nightFee, weekendFee, savings, total } = getPricingDetails(totalHours);
            summary.innerHTML = `
                <div style="display:flex;flex-direction:column;gap:.5rem;">
                  <div style="display:flex;justify-content:space-between;align-items:center;padding:.55rem .2rem;border-bottom:1px solid var(--border-color);font-size:.93rem;">
                    <span style="opacity:.7;">${dt('liveEstimateRate')}</span>
                    <span>${hourlyRate.toFixed(2)} MAD ${dt('liveEstimatePerHour')}</span>
                  </div>
                  <div style="display:flex;justify-content:space-between;align-items:center;padding:.55rem .2rem;border-bottom:1px solid var(--border-color);font-size:.93rem;">
                    <span style="opacity:.7;">${dt('liveEstimateTravel')}</span>
                    <span>${travelFee.toFixed(2)} MAD</span>
                  </div>
                  <div style="display:flex;justify-content:space-between;align-items:center;padding:.55rem .2rem;border-bottom:1px solid var(--border-color);font-size:.93rem;">
                    <span style="opacity:.7;">${dt('liveEstimateNight')}</span>
                    <span>${nightFee.toFixed(2)} MAD</span>
                  </div>
                  <div style="display:flex;justify-content:space-between;align-items:center;padding:.55rem .2rem;border-bottom:1px solid var(--border-color);font-size:.93rem;">
                    <span style="opacity:.7;">${dt('liveEstimateWeekend')}</span>
                    <span>${weekendFee.toFixed(2)} MAD</span>
                  </div>
                  <div style="display:flex;justify-content:space-between;align-items:center;padding:.55rem .2rem;border-bottom:1px solid var(--border-color);font-size:.93rem;">
                    <span style="opacity:.7;">${dt('liveEstimateSavings')}</span>
                    <span>-${savings.toFixed(2)} MAD</span>
                  </div>
                  <div style="display:flex;justify-content:space-between;align-items:center;padding:.8rem .2rem;margin-top:.3rem;">
                    <span style="font-size:1.05rem;font-weight:600;">${dt('summaryTotal')}</span>
                    <span style="font-size:1.9rem;font-weight:800;color:var(--accent-dark);">${total.toFixed(2)} MAD</span>
                  </div>
                </div>
            `;
        }

        document.addEventListener('change', function(e) {
            if (e.target.name === 'paymentMethod') {
                const cardFields = document.getElementById('cardFields');
                cardFields.style.display = e.target.value === 'card' ? 'block' : 'none';
            }
        });

        document.getElementById('cardExpiry')?.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0,2) + '/' + value.slice(2,4);
            }
            e.target.value = value;
        });

        const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxf3gnZ5ZPXdqK-xB-zrXTSptJ1dm_aG3SXB-HducyGFUAlyip6CgSuM_Kb6VdLjdjt/exec';

        function processPayment() {
            const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
            if (paymentMethod === 'card') {
                const cardNum = document.getElementById('cardNumber').value.trim();
                const expiry = document.getElementById('cardExpiry').value.trim();
                const cvv = document.getElementById('cardCvv').value.trim();

                if (!/^\d{16}$/.test(cardNum)) {
                    showPopup(translations[currentLang].validationCardNumber);
                    return;
                }
                if (!/^\d{2}\/\d{2}$/.test(expiry)) {
                    showPopup(translations[currentLang].validationExpiry);
                    return;
                }
                const [month, year] = expiry.split('/').map(Number);
                if (month < 1 || month > 12) {
                    showPopup(translations[currentLang].validationExpiry);
                    return;
                }
                const now = new Date();
                const currentYear = now.getFullYear() % 100;
                const currentMonth = now.getMonth() + 1;
                if (year < currentYear || (year === currentYear && month < currentMonth)) {
                    showPopup(translations[currentLang].validationExpiry);
                    return;
                }
                if (!/^\d{3}$/.test(cvv)) {
                    showPopup(translations[currentLang].validationCvv);
                    return;
                }
            }

            const fullName = `${clientInfo.firstName} ${clientInfo.lastName}`.trim();
            const email = clientInfo.email;
            const phone = clientInfo.phone;
            const date = selectedDate;
            const hours = selectedSlots.join(', ');

            const form = document.createElement('form');
            form.method = 'POST';
            form.action = GOOGLE_SCRIPT_URL;
            form.target = 'hidden_iframe';
            form.style.display = 'none';

            const fields = { 'A': fullName, 'B': email, 'C': phone, 'D': date, 'E': hours };
            for (const [name, value] of Object.entries(fields)) {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = name;
                input.value = value;
                form.appendChild(input);
            }

            document.body.appendChild(form);

            const confirmBtn = document.querySelector('#paymentMethodView .btn');
            const originalText = confirmBtn.textContent;
            confirmBtn.textContent = dt('submitting');
            confirmBtn.disabled = true;

            form.submit();

            setTimeout(() => {
                document.body.removeChild(form);
                confirmBtn.textContent = originalText;
                confirmBtn.disabled = false;
                navigateTo('confirmationView');
            }, 2000);
        }
        window.processPayment = processPayment;

        // Initialize default language
        setLanguage(localStorage.getItem('careviaLanguage') || 'en');
    