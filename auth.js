/* CareVia — Firebase Auth & Dashboard */


(function(){
/* ────────────────────────────────────
   DATABASE (localStorage)
   careviaUsers  → [{id, fn, ln, bd, email, pw, createdAt}]
   careviaOrders → [{...booking, userId}]
──────────────────────────────────── */
const DB_ORDERS = 'careviaOrders';
const DB_SESSION= 'careviaSession'; // current userId

function dbGet(key){ try{ return JSON.parse(localStorage.getItem(key)||'[]'); }catch(e){return [];} }
function dbSet(key,val){ try{ localStorage.setItem(key,JSON.stringify(val)); }catch(e){} }

/* ── Session ── */
function getSession(){ try{ return JSON.parse(localStorage.getItem(DB_SESSION)||'null'); }catch(e){return null;} }
function setSession(user){ localStorage.setItem(DB_SESSION, JSON.stringify(user)); }
function clearSession(){ localStorage.removeItem(DB_SESSION); }

/* ── Translations for auth/dashboard ── */
const AUTH_T = {
  ar:{
    loginTitle:'تسجيل الدخول', regTitle:'إنشاء حساب',
    emailLabel:'البريد الإلكتروني', passLabel:'كلمة المرور',
    fnLabel:'الاسم الأول', regPhoneLabel:'رقم الهاتف', errPhoneRequired:'رقم الهاتف مطلوب (8 أرقام على الأقل)', lnLabel:'النسب', bdLabel:'تاريخ الازدياد',
    pw2Label:'تأكيد كلمة المرور', loginBtn:'دخول', regBtn:'إنشاء الحساب',
    emailCodeLabel:'كود التحقق', sendCodeBtn:'إرسال الكود', verifyCodeBtn:'تأكيد الكود',
    verifyPending:'دخل بريدك الإلكتروني ثم صيفط الكود', verifyCodePlaceholder:'أدخل كود التحقق',
    verifySent:'تصيفط الكود للإيميل. شوف البريد ديالك.', verifySuccess:'تم التحقق من البريد الإلكتروني بنجاح',
    verifyExpired:'انتهت صلاحية الكود. صيفط كود جديد.', verifyInvalid:'الكود غير صحيح',
    errVerifyEmail:'خاصك تأكد الإيميل بالكود قبل إنشاء الحساب',
    toReg:'ما عندكش حساب؟', toRegLink:'أنشئ حساب',
    toLogin:'عندك حساب؟', toLoginLink:'سجل الدخول',
    modeTitle:'كيف تحب تحجز؟',
    modeLead:'اختر الطريقة التي تناسبك للمتابعة، ويمكنك دائماً إكمال الحجز بسرعة وبوضوح.',
    modeLoginLabel:'تسجيل الدخول', modeLoginDesc:'لديك حساب — سجّل الدخول لتتبع طلباتك',
    modeRegLabel:'إنشاء حساب', modeRegDesc:'جديد؟ أنشئ حسابك في دقيقة واحدة',
    modeGuestLabel:'المتابعة بدون حساب', modeGuestDesc:'احجز مباشرة دون تسجيل',
    authNavBtn:'دخول / حساب', logoutBtn:'خروج',
    dashTitle:'طلباتي', dashNewBtn:'+ طلب جديد',
    emptyDash:'ما عندكش طلبات بعد', statusPending:'في الانتظار',
    statusConfirmed:'مؤكد', statusInprogress:'قيد التنفيذ', statusCancelled:'ملغى', statusCompleted:'مكتمل',
    errEmail:'البريد الإلكتروني مش صحيح', errPass:'المرور قصير (6 حروف على الأقل)',
    errPassMatch:'كلمتا المرور ما تتطابقاش', errExists:'هذا البريد مسجل بالفعل', loginPrompt:'جرّب تسجيل الدخول',
    errNotFound:'البريد أو المرور خاطئ', errFill:'عبّي جميع الخانات',
    welcomeMsg:'أهلاً بك,',
    dashKicker:'مساحة الحساب المميزة',
    dashLead:'هنا يمكنك تتبع طلباتك، ومراجعة مواعيدك، وإدارة حسابك بسهولة.',
    dashViewActivity:'عرض النشاط',
    verifiedAccount:'حساب موثّق',
    totalRequestsLabel:'إجمالي الطلبات',
    latestUpdateLabel:'آخر تحديث',
    myRequestsLabel:'طلباتي',
    itemsCountLabel:'طلب',
    profileSummaryLabel:'ملخص الحساب',
    userAccountLabel:'حساب المستخدم',
    firstNameLabel:'الاسم الشخصي',
    lastNameLabel:'الاسم العائلي',
    accountStatusLabel:'حالة الحساب',
    activeStatusLabel:'نشط',
    updatesLabel:'التحديثات',
    updatesDesc:'تتبّع آخر حالة لطلباتك في مكان واحد.',
    secureAccountLabel:'حساب آمن',
    secureAccountDesc:'يبقى سجل طلباتك مرتبطاً بحسابك المسجل.',
    fastContactLabel:'تواصل سريع',
    fastContactDesc:'ابقَ جاهزاً للمتابعة السريعة عند مراجعة طلبك.',
    easyRebookingLabel:'إعادة حجز سهلة',
    easyRebookingDesc:'ارجع في أي وقت وابدأ طلب رعاية جديداً بسرعة أكبر.',
    resendCodeBtn:'إعادة إرسال الكود', resendIn:'يمكنك إعادة الإرسال بعد', attemptsLeft:'المحاولات المتبقية', temporarilyLocked:'تم توقيف التحقق مؤقتاً. حاول لاحقاً.',
    forgotTitle:'نسيت كلمة المرور', forgotLead:'أدخل بريدك الإلكتروني وسنرسل لك كود التحقق ثم رابطاً آمناً لتغيير كلمة المرور.', forgotLink:'نسيت كلمة المرور؟', forgotSendBtn:'إرسال الكود', forgotResetBtn:'إرسال رابط تغيير كلمة المرور', forgotCodeSent:'إذا كان هذا البريد مرتبطاً بحساب، فقد أرسلنا إليه كود الاسترجاع.', forgotCodeVerified:'تم التحقق من الكود. إذا كان هذا البريد مرتبطاً بحساب، فقد أرسلنا رابطاً آمناً لتغيير كلمة المرور.', forgotNoUser:'إذا كان هذا البريد مرتبطاً بحساب، فستتوصل برسالة الاسترجاع.', forgotInvalid:'كود الاسترجاع غير صحيح.',
    profileEditTitle:'تعديل الملف الشخصي', uploadPhotoBtn:'رفع الصورة', uploadPhotoHint:'JPG، PNG، WEBP — الحجم الأقصى 2MB', profileSaveBtn:'حفظ التعديلات', phoneLabel:'الهاتف', cityLabel:'المدينة', photoLabel:'رابط الصورة', verifiedEmailLabel:'البريد موثّق', accountActiveLabel:'الحساب نشط', notificationsLabel:'الإشعارات', whatsappLabel:'واتساب مباشر', changePasswordLabel:'تغيير كلمة المرور', sendResetLinkLabel:'إرسال رابط تغيير كلمة المرور', saveSuccess:'تم حفظ التعديلات بنجاح',
    notifCreated:'تم إنشاء الطلب', notifAccepted:'تم قبول الطلب', notifConfirmed:'تم تأكيد الموعد',
    regSubtitle:'انضم إلى عائلة CareVia',
    regStep1Label:'معلوماتك', regStep2Label:'التحقق', regStep3Label:'كلمة المرور',
    regStep1Hint:'أدخل معلوماتك الشخصية للبدء',
    regStep2Hint:'سنرسل كود تحقق إلى بريدك',
    regStep3Hint:'اختر كلمة مرور قوية لحماية حسابك',
    regNextBtn:'التالي', regBackBtn:'رجوع',
    fnPlaceholder:'محمد', lnPlaceholder:'بن علي',
    sendCodeFull:'إرسال كود التحقق', verifyCodeFull:'تأكيد الكود والمتابعة',
    verifyCodeEnter:'أدخل الكود المكوّن من 6 أرقام',
    pwWeak:'ضعيفة', pwFair:'مقبولة', pwMedium:'متوسطة', pwGood:'جيدة', pwStrong:'قوية',
    cancelBookingBtn:'إلغاء الحجز', rateBtn:'تقييم المقدم'
  },
  fr:{
    loginTitle:'Connexion', regTitle:'Créer un compte',
    emailLabel:'Email', passLabel:'Mot de passe',
    fnLabel:'Prénom', regPhoneLabel:'Numéro de téléphone', errPhoneRequired:'Numéro requis (8 chiffres min.)', lnLabel:'Nom', bdLabel:'Date de naissance',
    pw2Label:'Confirmer le mot de passe', loginBtn:'Se connecter', regBtn:'Créer le compte',
    emailCodeLabel:'Code de vérification', sendCodeBtn:'Envoyer le code', verifyCodeBtn:'Vérifier le code',
    verifyPending:'Entrez votre email puis envoyez le code', verifyCodePlaceholder:'Entrez le code de vérification',
    verifySent:'Le code a été envoyé par email.', verifySuccess:'Email vérifié avec succès',
    verifyExpired:'Le code a expiré. Renvoyez-en un nouveau.', verifyInvalid:'Code invalide',
    errVerifyEmail:'Vous devez vérifier votre email avec le code avant de créer le compte',
    toReg:'Pas de compte ?', toRegLink:'Créer un compte',
    toLogin:'Vous avez un compte ?', toLoginLink:'Se connecter',
    modeTitle:'Comment souhaitez-vous réserver ?',
    modeLead:'Choisissez la façon qui vous convient pour continuer, avec une expérience simple et claire.',
    modeLoginLabel:'Se connecter', modeLoginDesc:'Vous avez un compte — suivez vos demandes',
    modeRegLabel:'Créer un compte', modeRegDesc:'Nouveau ? Créez votre compte en une minute',
    modeGuestLabel:'Continuer sans compte', modeGuestDesc:'Réservez directement sans inscription',
    authNavBtn:'Connexion / Compte', logoutBtn:'Déconnexion',
    dashTitle:'Mes demandes', dashNewBtn:'+ Nouvelle demande',
    emptyDash:'Aucune demande pour l\'instant', statusPending:'En attente',
    statusConfirmed:'Confirmée', statusInprogress:'En cours', statusCancelled:'Annulée', statusCompleted:'Terminée',
    errEmail:'Email invalide', errPass:'Mot de passe trop court (6 caractères min)',
    errPassMatch:'Les mots de passe ne correspondent pas', errExists:'Cet email est déjà utilisé', loginPrompt:'Essayez de vous connecter',
    errNotFound:'Email ou mot de passe incorrect', errFill:'Veuillez remplir tous les champs',
    welcomeMsg:'Bienvenue,',
    dashKicker:'Espace compte premium',
    dashLead:'Ici, vous pouvez suivre vos demandes, consulter vos rendez-vous et gérer votre compte facilement.',
    dashViewActivity:'Voir l’activité',
    verifiedAccount:'Compte vérifié',
    totalRequestsLabel:'Total des demandes',
    latestUpdateLabel:'Dernière mise à jour',
    myRequestsLabel:'Mes demandes',
    itemsCountLabel:'élément(s)',
    profileSummaryLabel:'Résumé du profil',
    userAccountLabel:'Compte utilisateur',
    firstNameLabel:'Prénom',
    lastNameLabel:'Nom',
    accountStatusLabel:'Statut du compte',
    activeStatusLabel:'Actif',
    updatesLabel:'Mises à jour',
    updatesDesc:'Suivez le dernier statut de vos demandes au même endroit.',
    secureAccountLabel:'Compte sécurisé',
    secureAccountDesc:'Votre historique de réservation reste lié à votre compte connecté.',
    fastContactLabel:'Contact rapide',
    fastContactDesc:'Restez prêt pour un suivi rapide lorsque votre demande est examinée.',
    easyRebookingLabel:'Nouvelle réservation facile',
    easyRebookingDesc:'Revenez à tout moment et lancez plus vite une nouvelle demande de service.',
    resendCodeBtn:'Renvoyer le code', resendIn:'Nouveau renvoi dans', attemptsLeft:'Tentatives restantes', temporarilyLocked:'Vérification temporairement bloquée. Réessayez plus tard.',
    forgotTitle:'Mot de passe oublié', forgotLead:'Entrez votre email. Nous vous enverrons un code puis un lien sécurisé pour changer le mot de passe.', forgotLink:'Mot de passe oublié ?', forgotSendBtn:'Envoyer le code', forgotResetBtn:'Envoyer le lien de changement', forgotCodeSent:'Si cet email est lié à un compte, le code de récupération a été envoyé.', forgotCodeVerified:'Code vérifié. Si cet email est lié à un compte, un lien sécurisé de réinitialisation a été envoyé.', forgotNoUser:'Si cet email est lié à un compte, vous recevrez le message de récupération.', forgotInvalid:'Code de récupération invalide.',
    profileEditTitle:'Modifier le profil', uploadPhotoBtn:'Télécharger photo', uploadPhotoHint:'JPG, PNG, WEBP — max 2MB', profileSaveBtn:'Enregistrer', phoneLabel:'Téléphone', cityLabel:'Ville', photoLabel:'Lien de la photo', verifiedEmailLabel:'Email vérifié', accountActiveLabel:'Compte actif', notificationsLabel:'Notifications', whatsappLabel:'WhatsApp direct', changePasswordLabel:'Changer le mot de passe', sendResetLinkLabel:'Envoyer le lien de changement', saveSuccess:'Modifications enregistrées',
    notifCreated:'Demande créée', notifAccepted:'Demande acceptée', notifConfirmed:'Rendez-vous confirmé',
    regSubtitle:'Rejoignez la famille CareVia',
    regStep1Label:'Vos infos', regStep2Label:'Vérification', regStep3Label:'Mot de passe',
    regStep1Hint:'Entrez vos informations personnelles pour commencer',
    regStep2Hint:'Nous enverrons un code de vérification à votre email',
    regStep3Hint:'Choisissez un mot de passe fort pour protéger votre compte',
    regNextBtn:'Suivant', regBackBtn:'Retour',
    fnPlaceholder:'Prénom', lnPlaceholder:'Nom de famille',
    sendCodeFull:'Envoyer le code de vérification', verifyCodeFull:'Vérifier le code et continuer',
    verifyCodeEnter:'Entrez le code à 6 chiffres',
    pwWeak:'Faible', pwFair:'Passable', pwMedium:'Moyen', pwGood:'Bon', pwStrong:'Fort',
    cancelBookingBtn:'Annuler la réservation', rateBtn:'Évaluer le prestataire'
  },
  en:{
    loginTitle:'Sign In', regTitle:'Create Account',
    emailLabel:'Email', passLabel:'Password',
    fnLabel:'First Name', lnLabel:'Last Name', bdLabel:'Date of Birth',
    pw2Label:'Confirm Password', loginBtn:'Sign In', regBtn:'Create Account',
    emailCodeLabel:'Verification Code', sendCodeBtn:'Send Code', verifyCodeBtn:'Verify Code',
    verifyPending:'Enter your email then send the code', verifyCodePlaceholder:'Enter verification code',
    verifySent:'The verification code was sent to your email.', verifySuccess:'Email verified successfully',
    verifyExpired:'The code expired. Send a new one.', verifyInvalid:'Invalid code',
    errVerifyEmail:'You must verify your email with the code before creating the account',
    toReg:'No account?', toRegLink:'Create one',
    toLogin:'Already have an account?', toLoginLink:'Sign In',
    modeTitle:'Welcome to CareVia',
    modeLead:'Sign in or create an account to continue.',
    modeLoginLabel:'Sign In', modeLoginDesc:'Have an account — track your bookings',
    modeRegLabel:'Create Account', modeRegDesc:'New? Set up your account in a minute',
    modeGuestLabel:'Continue as Guest', modeGuestDesc:'Book directly without signing in',
    authNavBtn:'Sign In / Account', logoutBtn:'Sign Out',
    dashTitle:'My Bookings', dashNewBtn:'+ New Booking',
    emptyDash:'No bookings yet', statusPending:'Pending',
    statusConfirmed:'Confirmed', statusInprogress:'In Progress', statusCancelled:'Cancelled', statusCompleted:'Completed',
    errEmail:'Invalid email address', errPass:'Password too short (min 6 characters)',
    errPassMatch:'Passwords do not match', errExists:'This email is already registered', loginPrompt:'Try signing in instead',
    errNotFound:'Incorrect email or password', errFill:'Please fill in all fields',
    welcomeMsg:'Welcome,',
    dashKicker:'Premium account space',
    dashLead:'Here you can track your requests, review your appointments, and manage your account easily.',
    dashViewActivity:'View activity',
    verifiedAccount:'Verified account',
    totalRequestsLabel:'Total requests',
    latestUpdateLabel:'Latest update',
    myRequestsLabel:'My requests',
    itemsCountLabel:'item(s)',
    profileSummaryLabel:'Profile summary',
    userAccountLabel:'User account',
    firstNameLabel:'First name',
    lastNameLabel:'Last name',
    accountStatusLabel:'Account status',
    activeStatusLabel:'Active',
    updatesLabel:'Updates',
    updatesDesc:'Track the latest status of your requests in one place.',
    secureAccountLabel:'Secure account',
    secureAccountDesc:'Your booking history stays linked to your signed-in account.',
    fastContactLabel:'Fast contact',
    fastContactDesc:'Stay ready for quick follow-up when your request is reviewed.',
    easyRebookingLabel:'Easy rebooking',
    easyRebookingDesc:'Come back anytime and start a new care request faster.',
    resendCodeBtn:'Resend code', resendIn:'Resend available in', attemptsLeft:'Attempts left', temporarilyLocked:'Verification is temporarily locked. Please try again later.',
    forgotTitle:'Forgot password', forgotLead:'Use the secure recovery flow to reset your password in a few steps.', forgotLink:'Forgot password?', forgotSendBtn:'Send code', forgotResetBtn:'Send password reset link', forgotCodeSent:'If this email is linked to an account, a recovery code has been sent.', forgotCodeVerified:'Code verified. If this email is linked to an account, we sent a secure password reset link.', forgotNoUser:'If this email is linked to an account, you will receive the recovery message.', forgotInvalid:'Invalid recovery code.',
    profileEditTitle:'Edit profile', uploadPhotoBtn:'Upload photo', uploadPhotoHint:'JPG, PNG, WEBP — max 2MB', profileSaveBtn:'Save changes', phoneLabel:'Phone', cityLabel:'City', photoLabel:'Photo URL', verifiedEmailLabel:'Email verified', accountActiveLabel:'Account active', notificationsLabel:'Notifications', whatsappLabel:'Direct WhatsApp', changePasswordLabel:'Change password', sendResetLinkLabel:'Send password reset link', saveSuccess:'Changes saved successfully',
    notifCreated:'Request created', notifAccepted:'Request accepted', notifConfirmed:'Appointment confirmed',
    regSubtitle:'Join the CareVia family',
    regStep1Label:'Your info', regStep2Label:'Verification', regStep3Label:'Password',
    regStep1Hint:'Enter your personal information to get started',
    regStep2Hint:'We will send a verification code to your email',
    regStep3Hint:'Choose a strong password to protect your account',
    regNextBtn:'Next', regBackBtn:'Back',
    fnPlaceholder:'First name', lnPlaceholder:'Last name',
    sendCodeFull:'Send verification code', verifyCodeFull:'Verify code & continue',
    verifyCodeEnter:'Enter the 6-digit code',
    pwWeak:'Weak', pwFair:'Fair', pwMedium:'Medium', pwGood:'Good', pwStrong:'Strong',
    cancelBookingBtn:'Cancel booking', rateBtn:'Rate caregiver'
  },
  es:{
    loginTitle:'Iniciar sesión', regTitle:'Crear cuenta',
    emailLabel:'Correo electrónico', passLabel:'Contraseña',
    fnLabel:'Nombre', regPhoneLabel:'Número de teléfono', errPhoneRequired:'Teléfono requerido (mín. 8 dígitos)', lnLabel:'Apellido', bdLabel:'Fecha de nacimiento',
    pw2Label:'Confirmar contraseña', loginBtn:'Entrar', regBtn:'Crear cuenta',
    emailCodeLabel:'Código de verificación', sendCodeBtn:'Enviar código', verifyCodeBtn:'Verificar código',
    verifyPending:'Ingresa tu correo y envía el código', verifyCodePlaceholder:'Ingresa el código de verificación',
    verifySent:'Se envió el código a tu correo.', verifySuccess:'Correo verificado con éxito',
    verifyExpired:'El código expiró. Envía uno nuevo.', verifyInvalid:'Código inválido',
    errVerifyEmail:'Debes verificar tu correo con el código antes de crear la cuenta',
    toReg:'¿No tienes cuenta?', toRegLink:'Crear una',
    toLogin:'¿Ya tienes cuenta?', toLoginLink:'Inicia sesión',
    modeTitle:'¿Cómo deseas reservar?',
    modeLead:'Elige la opción que más te convenga para continuar.',
    modeLoginLabel:'Iniciar sesión', modeLoginDesc:'Tienes cuenta — rastrea tus reservas',
    modeRegLabel:'Crear cuenta', modeRegDesc:'¿Nuevo? Crea tu cuenta en un minuto',
    modeGuestLabel:'Continuar como invitado', modeGuestDesc:'Reserva directamente sin registrarte',
    authNavBtn:'Entrar / Cuenta', logoutBtn:'Cerrar sesión',
    dashTitle:'Mis reservas', dashNewBtn:'+ Nueva reserva',
    emptyDash:'Aún no hay reservas', statusPending:'Pendiente',
    statusConfirmed:'Confirmado', statusInprogress:'En progreso', statusCancelled:'Cancelado', statusCompleted:'Completado',
    errEmail:'Correo inválido', errPass:'Contraseña muy corta (mín. 6 caracteres)',
    errPassMatch:'Las contraseñas no coinciden', errExists:'Este correo ya está registrado', loginPrompt:'Intente iniciar sesión',
    errNotFound:'Correo o contraseña incorrectos', errFill:'Por favor rellena todos los campos',
    welcomeMsg:'Bienvenido,',
    dashKicker:'Espacio de cuenta premium',
    dashLead:'Aquí puedes rastrear tus solicitudes y gestionar tu cuenta fácilmente.',
    dashViewActivity:'Ver actividad',
    verifiedAccount:'Cuenta verificada',
    totalRequestsLabel:'Total de solicitudes', latestUpdateLabel:'Última actualización',
    myRequestsLabel:'Mis solicitudes', itemsCountLabel:'elemento(s)',
    profileSummaryLabel:'Resumen del perfil', userAccountLabel:'Cuenta de usuario',
    firstNameLabel:'Nombre', lastNameLabel:'Apellido',
    accountStatusLabel:'Estado de la cuenta', activeStatusLabel:'Activo',
    updatesLabel:'Actualizaciones', updatesDesc:'Rastrea el último estado de tus solicitudes.',
    secureAccountLabel:'Cuenta segura', secureAccountDesc:'Tu historial queda vinculado a tu cuenta.',
    fastContactLabel:'Contacto rápido', fastContactDesc:'Mantente listo para seguimiento rápido.',
    easyRebookingLabel:'Nueva reserva fácil', easyRebookingDesc:'Vuelve cuando quieras y empieza más rápido.',
    resendCodeBtn:'Reenviar código', resendIn:'Reenvío disponible en', attemptsLeft:'Intentos restantes', temporarilyLocked:'Verificación bloqueada temporalmente. Inténtalo más tarde.',
    forgotTitle:'Olvidé mi contraseña', forgotLead:'Ingresa tu correo. Te enviaremos un código y un enlace seguro para cambiar la contraseña.', forgotLink:'¿Olvidaste tu contraseña?', forgotSendBtn:'Enviar código', forgotResetBtn:'Enviar enlace de cambio', forgotCodeSent:'Si este correo está vinculado a una cuenta, se envió el código.', forgotCodeVerified:'Código verificado. Si el correo está vinculado, enviamos un enlace seguro.', forgotNoUser:'Si el correo está vinculado, recibirás el mensaje de recuperación.', forgotInvalid:'Código de recuperación inválido.',
    profileEditTitle:'Editar perfil', uploadPhotoBtn:'Subir foto', uploadPhotoHint:'JPG, PNG, WEBP — máx 2MB', profileSaveBtn:'Guardar cambios', phoneLabel:'Teléfono', cityLabel:'Ciudad', photoLabel:'URL de foto', verifiedEmailLabel:'Correo verificado', accountActiveLabel:'Cuenta activa', notificationsLabel:'Notificaciones', whatsappLabel:'WhatsApp directo', changePasswordLabel:'Cambiar contraseña', sendResetLinkLabel:'Enviar enlace de cambio', saveSuccess:'Cambios guardados correctamente',
    notifCreated:'Solicitud creada', notifAccepted:'Solicitud aceptada', notifConfirmed:'Cita confirmada',
    regSubtitle:'Únete a la familia CareVia',
    regStep1Label:'Tu info', regStep2Label:'Verificación', regStep3Label:'Contraseña',
    regStep1Hint:'Ingresa tu información personal para comenzar',
    regStep2Hint:'Enviaremos un código de verificación a tu correo',
    regStep3Hint:'Elige una contraseña segura para proteger tu cuenta',
    regNextBtn:'Siguiente', regBackBtn:'Atrás',
    fnPlaceholder:'Nombre', lnPlaceholder:'Apellido',
    sendCodeFull:'Enviar código de verificación', verifyCodeFull:'Verificar código y continuar',
    verifyCodeEnter:'Ingresa el código de 6 dígitos',
    pwWeak:'Débil', pwFair:'Aceptable', pwMedium:'Media', pwGood:'Buena', pwStrong:'Fuerte',
    cancelBookingBtn:'Cancelar reserva', rateBtn:'Valorar al cuidador'
  },
  de:{
    loginTitle:'Anmelden', regTitle:'Konto erstellen',
    emailLabel:'E-Mail', passLabel:'Passwort',
    fnLabel:'Vorname', regPhoneLabel:'Telefonnummer', errPhoneRequired:'Telefon erforderlich (mind. 8 Ziffern)', lnLabel:'Nachname', bdLabel:'Geburtsdatum',
    pw2Label:'Passwort bestätigen', loginBtn:'Anmelden', regBtn:'Konto erstellen',
    emailCodeLabel:'Bestätigungscode', sendCodeBtn:'Code senden', verifyCodeBtn:'Code bestätigen',
    verifyPending:'Gib deine E-Mail ein und sende den Code', verifyCodePlaceholder:'Bestätigungscode eingeben',
    verifySent:'Der Code wurde an deine E-Mail gesendet.', verifySuccess:'E-Mail erfolgreich verifiziert',
    verifyExpired:'Der Code ist abgelaufen. Sende einen neuen.', verifyInvalid:'Ungültiger Code',
    errVerifyEmail:'Du musst deine E-Mail mit dem Code bestätigen, bevor du ein Konto erstellst',
    toReg:'Kein Konto?', toRegLink:'Erstelle eines',
    toLogin:'Hast du schon ein Konto?', toLoginLink:'Anmelden',
    modeTitle:'Wie möchten Sie buchen?',
    modeLead:'Wähle die Option, die am besten zu dir passt, um fortzufahren.',
    modeLoginLabel:'Anmelden', modeLoginDesc:'Du hast ein Konto — verfolge deine Buchungen',
    modeRegLabel:'Konto erstellen', modeRegDesc:'Neu? Erstelle dein Konto in einer Minute',
    modeGuestLabel:'Als Gast fortfahren', modeGuestDesc:'Direkt buchen ohne Registrierung',
    authNavBtn:'Anmelden / Konto', logoutBtn:'Abmelden',
    dashTitle:'Meine Buchungen', dashNewBtn:'+ Neue Buchung',
    emptyDash:'Noch keine Buchungen', statusPending:'Ausstehend',
    statusConfirmed:'Bestätigt', statusInprogress:'In Bearbeitung', statusCancelled:'Storniert', statusCompleted:'Abgeschlossen',
    errEmail:'Ungültige E-Mail-Adresse', errPass:'Passwort zu kurz (mind. 6 Zeichen)',
    errPassMatch:'Passwörter stimmen nicht überein', errExists:'Diese E-Mail ist bereits registriert', loginPrompt:'Versuchen Sie sich anzumelden',
    errNotFound:'Falsche E-Mail oder Passwort', errFill:'Bitte alle Felder ausfüllen',
    welcomeMsg:'Willkommen,',
    dashKicker:'Premium-Kontobereich',
    dashLead:'Hier kannst du deine Anfragen verfolgen und dein Konto verwalten.',
    dashViewActivity:'Aktivität ansehen',
    verifiedAccount:'Verifiziertes Konto',
    totalRequestsLabel:'Gesamtanfragen', latestUpdateLabel:'Letztes Update',
    myRequestsLabel:'Meine Anfragen', itemsCountLabel:'Element(e)',
    profileSummaryLabel:'Profilübersicht', userAccountLabel:'Benutzerkonto',
    firstNameLabel:'Vorname', lastNameLabel:'Nachname',
    accountStatusLabel:'Kontostatus', activeStatusLabel:'Aktiv',
    updatesLabel:'Updates', updatesDesc:'Verfolge den letzten Status deiner Anfragen.',
    secureAccountLabel:'Sicheres Konto', secureAccountDesc:'Dein Buchungsverlauf bleibt mit deinem Konto verknüpft.',
    fastContactLabel:'Schneller Kontakt', fastContactDesc:'Bleibe bereit für schnelle Nachverfolgung.',
    easyRebookingLabel:'Einfache Neubuchung', easyRebookingDesc:'Komm jederzeit zurück und starte schneller.',
    resendCodeBtn:'Code erneut senden', resendIn:'Erneutes Senden in', attemptsLeft:'Verbleibende Versuche', temporarilyLocked:'Verifizierung vorübergehend gesperrt. Versuche es später.',
    forgotTitle:'Passwort vergessen', forgotLead:'Gib deine E-Mail ein. Wir senden dir einen Code und einen sicheren Link zum Ändern des Passworts.', forgotLink:'Passwort vergessen?', forgotSendBtn:'Code senden', forgotResetBtn:'Rücksetz-Link senden', forgotCodeSent:'Wenn diese E-Mail mit einem Konto verknüpft ist, wurde der Code gesendet.', forgotCodeVerified:'Code bestätigt. Wenn die E-Mail verknüpft ist, haben wir einen sicheren Link gesendet.', forgotNoUser:'Wenn diese E-Mail verknüpft ist, erhältst du die Wiederherstellungsnachricht.', forgotInvalid:'Ungültiger Wiederherstellungscode.',
    profileEditTitle:'Profil bearbeiten', uploadPhotoBtn:'Foto hochladen', uploadPhotoHint:'JPG, PNG, WEBP — max 2MB', profileSaveBtn:'Änderungen speichern', phoneLabel:'Telefon', cityLabel:'Stadt', photoLabel:'Foto-URL', verifiedEmailLabel:'E-Mail verifiziert', accountActiveLabel:'Konto aktiv', notificationsLabel:'Benachrichtigungen', whatsappLabel:'WhatsApp direkt', changePasswordLabel:'Passwort ändern', sendResetLinkLabel:'Rücksetz-Link senden', saveSuccess:'Änderungen erfolgreich gespeichert',
    notifCreated:'Anfrage erstellt', notifAccepted:'Anfrage angenommen', notifConfirmed:'Termin bestätigt',
    regSubtitle:'Tritt der CareVia-Familie bei',
    regStep1Label:'Deine Info', regStep2Label:'Verifizierung', regStep3Label:'Passwort',
    regStep1Hint:'Gib deine persönlichen Daten ein, um zu beginnen',
    regStep2Hint:'Wir senden einen Bestätigungscode an deine E-Mail',
    regStep3Hint:'Wähle ein sicheres Passwort zum Schutz deines Kontos',
    regNextBtn:'Weiter', regBackBtn:'Zurück',
    fnPlaceholder:'Vorname', lnPlaceholder:'Nachname',
    sendCodeFull:'Bestätigungscode senden', verifyCodeFull:'Code bestätigen & weiter',
    verifyCodeEnter:'Gib den 6-stelligen Code ein',
    pwWeak:'Schwach', pwFair:'Akzeptabel', pwMedium:'Mittel', pwGood:'Gut', pwStrong:'Stark',
    cancelBookingBtn:'Buchung stornieren', rateBtn:'Betreuer bewerten'
  }
};
function at(key){ const lang = (typeof currentLang !== 'undefined') ? currentLang : 'ar'; return (AUTH_T[lang]||AUTH_T.en)[key]||key; }

/* ── Helpers ── */
function isValidEmailLocal(e){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
function hashPw(pw){ let h=0; for(let i=0;i<pw.length;i++){h=(h<<5)-h+pw.charCodeAt(i);h|=0;} return h.toString(36); }


const CV_EMAIL_CODE_EXPIRY_MS = 10 * 60 * 1000;
const CV_EMAIL_RESEND_MS = 60 * 1000;
const CV_EMAIL_MAX_ATTEMPTS = 5;
const CV_EMAIL_LOCK_MS = 15 * 60 * 1000;
window._cvEmailVerification = {email:'', code:'', sentAt:0, expiresAt:0, verified:false, attempts:CV_EMAIL_MAX_ATTEMPTS, lockUntil:0, resendAt:0};
window._cvForgotVerification = {email:'', code:'', sentAt:0, expiresAt:0, attempts:CV_EMAIL_MAX_ATTEMPTS, lockUntil:0, resendAt:0};
window.CV_EMAILJS_CONFIG = window.CV_EMAILJS_CONFIG || {
  publicKey:'HjLGrrx1T_SGtczbT',
  serviceId:'service_avdmeq8',
  templateId:'template_j272ymv'
};
(function initEmailJsSafe(){
  try{
    if(window.emailjs && window.CV_EMAILJS_CONFIG.publicKey){
      window.emailjs.init({ publicKey: window.CV_EMAILJS_CONFIG.publicKey });
    }
  }catch(err){ console.warn('EmailJS init skipped:', err); }
})();
function cvShowToast(title, msg, icon='fa-circle-check'){
  const wrap=document.getElementById('cvToastWrap');
  if(!wrap) return;
  const el=document.createElement('div');
  el.className='cv-toast';
  el.innerHTML=`<i class="fas ${icon}"></i><div><strong>${title}</strong><div>${msg}</div></div>`;
  wrap.appendChild(el);
  setTimeout(()=>{ el.style.opacity='0'; el.style.transform='translateY(-6px)'; setTimeout(()=>el.remove(),260); }, 3600);
}
function cvSetVerifyStatus(type, msg, targetId='cvVerifyStatus'){
  const el=document.getElementById(targetId);
  if(!el) return;
  if(!msg){ el.className='cv-verify-status'; el.textContent=''; return; }
  const icons={info:'fa-circle-info',success:'fa-circle-check',error:'fa-circle-exclamation'};
  el.className=`cv-verify-status show ${type||'info'}`;
  el.innerHTML=`<i class="fas ${icons[type]||icons.info}"></i> ${msg}`;
}
function cvBaseVerificationState(){ return {email:'', code:'', sentAt:0, expiresAt:0, verified:false, attempts:CV_EMAIL_MAX_ATTEMPTS, lockUntil:0, resendAt:0}; }
function cvResetEmailVerification(opts={}){
  const keepStatus = !!opts.keepStatus;
  window._cvEmailVerification = cvBaseVerificationState();
  const codeInput=document.getElementById('cvRegEmailCode');
  if(codeInput) codeInput.value='';
  if(!keepStatus) cvSetVerifyStatus('info', at('verifyPending'));
  cvUpdateVerificationUi('register');
}
function cvResetForgotVerification(opts={}){
  window._cvForgotVerification = cvBaseVerificationState();
  const codeInput=document.getElementById('cvForgotCode');
  if(codeInput) codeInput.value='';
  if(!opts.keepStatus) cvSetVerifyStatus('info', '', 'cvForgotStatus');
  cvUpdateVerificationUi('forgot');
}
function cvCountdownText(ms){ return `${at('resendIn')} ${Math.max(1, Math.ceil(ms/1000))}s`; }
function cvUpdateVerificationUi(mode='register'){
  const isForgot = mode==='forgot';
  const state = isForgot ? (window._cvForgotVerification||cvBaseVerificationState()) : (window._cvEmailVerification||cvBaseVerificationState());
  const sendBtn = document.getElementById(isForgot ? 'cvForgotSendBtn' : 'cvSendCodeBtn');
  const resendBtn = document.getElementById(isForgot ? 'cvForgotResendBtn' : 'cvResendCodeBtn');
  const hintEl = document.getElementById(isForgot ? 'cvForgotHint' : 'cvResendHint');
  const now = Date.now();
  const locked = state.lockUntil && state.lockUntil > now;
  const resendBlocked = state.resendAt && state.resendAt > now;
  if(sendBtn) sendBtn.disabled = locked || resendBlocked;
  if(resendBtn) resendBtn.disabled = locked || resendBlocked || !state.sentAt;
  if(hintEl){
    if(locked) hintEl.textContent = `${at('temporarilyLocked')} (${Math.ceil((state.lockUntil-now)/60000)}m)`;
    else if(resendBlocked) hintEl.textContent = cvCountdownText(state.resendAt-now);
    else hintEl.textContent = state.sentAt ? `${at('attemptsLeft')}: ${state.attempts}` : '';
  }
}
setInterval(()=>{ cvUpdateVerificationUi('register'); cvUpdateVerificationUi('forgot'); }, 1000);
async function cvSendCodeByEmail(em, code){
  const cfg = window.CV_EMAILJS_CONFIG || {};
  if(window.emailjs && cfg.publicKey && cfg.serviceId && cfg.templateId){
    await window.emailjs.send(cfg.serviceId, cfg.templateId, {
      email: em,
      to_email: em,
      passcode: code,
      verification_code: code,
      code: code,
      app_name: 'CareVia'
    }, { publicKey: cfg.publicKey });
  } else {
    throw new Error('EmailJS not configured');
  }
}
window.cvSendEmailCode = async function(){
  const em=(document.getElementById('cvRegEm')?.value || '').trim().toLowerCase();
  if(!em) return cvSetVerifyStatus('error', at('errFill'));
  if(!isValidEmailLocal(em)) return cvSetVerifyStatus('error', at('errEmail'));
  /* ── تحقق هل الإيميل ديجا مسجل قبل ما نبعثو الكود ── */
  /* الطريقة الأضمن مع Firebase 12: نجربو createUser بكلمة مرور مؤقتة ونشوفو العيب */
  if(window.cvFirebaseAuth){
    try{
      const tempCred = await window.cvFirebaseAuth.createUserWithEmailAndPassword(em, '__cv_tmp_' + Date.now() + '__');
      /* إذا نجح (الإيميل ماكانش) نحذفو فوراً */
      if(tempCred && tempCred.user){
        try{ await tempCred.user.delete(); }catch(delErr){ console.warn('temp user delete failed:', delErr); }
      }
      /* نكملو بحال عادي — الإيميل غير مسجل */
    }catch(firebaseErr){
      const code = firebaseErr.code || '';
      if(code === 'auth/email-already-in-use'){
        /* الإيميل ديجا مسجل — نوقفو هنا */
        return cvSetVerifyStatus('error', at('errExists') + ' — ' + at('loginPrompt'));
      }
      /* أي error آخر (network, weak-password, etc.) نكملو */
      console.warn('Email pre-check skipped:', code);
    }
  }
  const state = window._cvEmailVerification || cvBaseVerificationState();
  const now = Date.now();
  if(state.lockUntil && state.lockUntil > now) return cvSetVerifyStatus('error', at('temporarilyLocked'));
  if(state.resendAt && state.resendAt > now) return cvSetVerifyStatus('error', cvCountdownText(state.resendAt-now));
  const code = String(Math.floor(100000 + Math.random() * 900000));
  window._cvEmailVerification = { ...state, email:em, code, sentAt:now, expiresAt:now+CV_EMAIL_CODE_EXPIRY_MS, verified:false, resendAt: now + CV_EMAIL_RESEND_MS };
  try{
    await cvSendCodeByEmail(em, code);
    cvSetVerifyStatus('info', at('verifySent'));
  }catch(err){
    console.error(err);
    cvSetVerifyStatus('error', 'Email service error. Check EmailJS settings.');
  }
  cvUpdateVerificationUi('register');
};
window.cvVerifyEmailCode = function(){
  const em=(document.getElementById('cvRegEm')?.value || '').trim().toLowerCase();
  const code=(document.getElementById('cvRegEmailCode')?.value || '').trim();
  const v=window._cvEmailVerification || cvBaseVerificationState();
  const now=Date.now();
  if(!em || !code) return cvSetVerifyStatus('error', at('errFill'));
  if(v.lockUntil && v.lockUntil > now) return cvSetVerifyStatus('error', at('temporarilyLocked'));
  if(v.email!==em) return cvSetVerifyStatus('error', at('verifyInvalid'));
  if(now>v.expiresAt) return cvSetVerifyStatus('error', at('verifyExpired'));
  if(code!==v.code){
    v.attempts = Math.max(0, (v.attempts || CV_EMAIL_MAX_ATTEMPTS) - 1);
    if(v.attempts <= 0){ v.lockUntil = now + CV_EMAIL_LOCK_MS; cvSetVerifyStatus('error', at('temporarilyLocked')); }
    else cvSetVerifyStatus('error', `${at('verifyInvalid')} — ${at('attemptsLeft')}: ${v.attempts}`);
    window._cvEmailVerification=v; cvUpdateVerificationUi('register'); return;
  }
  v.verified=true; v.attempts=CV_EMAIL_MAX_ATTEMPTS;
  window._cvEmailVerification=v;
  cvSetVerifyStatus('success', at('verifySuccess'));
  cvShowToast('CareVia', at('verifySuccess'));
  cvUpdateVerificationUi('register');
};
window.cvOpenForgot = function(){ document.getElementById('cvForgotOverlay').style.display='flex'; cvResetForgotVerification(); };
window.cvCloseForgot = function(){ document.getElementById('cvForgotOverlay').style.display='none'; };
window.cvSendForgotCode = async function(){
  const em=(document.getElementById('cvForgotEmail')?.value || '').trim().toLowerCase();
  if(!em) return cvSetVerifyStatus('error', at('errFill'), 'cvForgotStatus');
  if(!isValidEmailLocal(em)) return cvSetVerifyStatus('error', at('errEmail'), 'cvForgotStatus');
  const now=Date.now();
  const state = window._cvForgotVerification || cvBaseVerificationState();
  if(state.lockUntil && state.lockUntil > now) return cvSetVerifyStatus('error', at('temporarilyLocked'), 'cvForgotStatus');
  if(state.resendAt && state.resendAt > now) return cvSetVerifyStatus('error', cvCountdownText(state.resendAt-now), 'cvForgotStatus');
  try{
    if(window.cvFirebaseAuth && typeof window.cvFirebaseAuth.fetchSignInMethodsForEmail==='function'){
      await window.cvFirebaseAuth.fetchSignInMethodsForEmail(em);
    }
  }catch(err){
    console.warn('Forgot password pre-check skipped:', err);
  }
  const code = String(Math.floor(100000 + Math.random() * 900000));
  window._cvForgotVerification = { ...state, email:em, code, sentAt:now, expiresAt:now+CV_EMAIL_CODE_EXPIRY_MS, resendAt:now+CV_EMAIL_RESEND_MS, attempts:CV_EMAIL_MAX_ATTEMPTS };
  try{ await cvSendCodeByEmail(em, code); cvSetVerifyStatus('info', at('forgotCodeSent'), 'cvForgotStatus'); }
  catch(err){ console.error(err); cvSetVerifyStatus('error', 'Email service error. Check EmailJS settings.', 'cvForgotStatus'); }
  cvUpdateVerificationUi('forgot');
};
window.cvVerifyForgotCodeAndSendReset = async function(){
  const em=(document.getElementById('cvForgotEmail')?.value || '').trim().toLowerCase();
  const code=(document.getElementById('cvForgotCode')?.value || '').trim();
  const v=window._cvForgotVerification || cvBaseVerificationState();
  const now=Date.now();
  if(!em || !code) return cvSetVerifyStatus('error', at('errFill'), 'cvForgotStatus');
  if(v.lockUntil && v.lockUntil > now) return cvSetVerifyStatus('error', at('temporarilyLocked'), 'cvForgotStatus');
  if(v.email!==em || now>v.expiresAt) return cvSetVerifyStatus('error', at('verifyExpired'), 'cvForgotStatus');
  if(code!==v.code){
    v.attempts = Math.max(0, (v.attempts || CV_EMAIL_MAX_ATTEMPTS) - 1);
    if(v.attempts <= 0){ v.lockUntil = now + CV_EMAIL_LOCK_MS; cvSetVerifyStatus('error', at('temporarilyLocked'), 'cvForgotStatus'); }
    else cvSetVerifyStatus('error', `${at('forgotInvalid')} — ${at('attemptsLeft')}: ${v.attempts}`, 'cvForgotStatus');
    window._cvForgotVerification=v; cvUpdateVerificationUi('forgot'); return;
  }
  try{
    await cvSendCustomPasswordResetEmail(em);
  }catch(err){
    console.warn('Password reset email fallback:', err);
  }
  cvSetVerifyStatus('success', at('forgotCodeVerified'), 'cvForgotStatus');
  cvShowToast('CareVia', at('forgotCodeVerified'), 'fa-key');
};
document.addEventListener('input', function(e){
  if(e.target && e.target.id==='cvRegEm'){
    const v=window._cvEmailVerification || {};
    const current=(e.target.value || '').trim().toLowerCase();
    if(v.email && current!==v.email){ cvResetEmailVerification(); }
  }
  if(e.target && e.target.id==='cvForgotEmail'){
    const v=window._cvForgotVerification || {};
    const current=(e.target.value || '').trim().toLowerCase();
    if(v.email && current!==v.email){ cvResetForgotVerification(); }
  }
});

/* ── Render all auth text (called on lang change) ── */
function renderAuthText(){
  const setT=(id,key)=>{const el=document.getElementById(id); if(el) el.textContent=at(key);};
  setT('cvLoginTitle','loginTitle'); setT('cvRegTitle','regTitle');
  setT('cvLoginEmailLabel','emailLabel'); setT('cvLoginPassLabel','passLabel');
  setT('cvLoginBtn','loginBtn'); setT('cvRegBtn','regBtn');
  setT('cvRegFnLabel','fnLabel'); setT('cvRegLnLabel','lnLabel'); setT('cvRegPhoneLabel','regPhoneLabel');
  setT('cvRegBdLabel','bdLabel'); setT('cvRegEmLabel','emailLabel');
  setT('cvRegPwLabel','passLabel'); setT('cvRegPw2Label','pw2Label');
  // Multi-step register form
  const regSubtitle=document.getElementById('cvRegSubtitle');
  if(regSubtitle) regSubtitle.textContent=at('regSubtitle');
  setT('cvRegStep1Label','regStep1Label');
  setT('cvRegStep2Label','regStep2Label');
  setT('cvRegStep3Label','regStep3Label');
  const h1=document.getElementById('cvRegStep1Hint');
  if(h1) h1.lastChild.textContent=' '+at('regStep1Hint');
  const h2=document.getElementById('cvRegStep2Hint');
  if(h2) h2.lastChild.textContent=' '+at('regStep2Hint');
  const h3=document.getElementById('cvRegStep3Hint');
  if(h3) h3.lastChild.textContent=' '+at('regStep3Hint');
  const nextBtn=document.getElementById('cvRegNextBtn');
  const isRtl = document.body.classList.contains('rtl');
  const nextArrow = isRtl ? 'fa-arrow-left' : 'fa-arrow-right';
  const backArrow = isRtl ? 'fa-arrow-right' : 'fa-arrow-left';
  if(nextBtn) nextBtn.innerHTML=`<span>${at('regNextBtn')}</span> <i class="fas ${nextArrow}"></i>`;
  document.querySelectorAll('.cv-reg-back-btn').forEach(btn=>{
    btn.innerHTML=`<i class="fas ${backArrow}"></i> ${at('regBackBtn')}`;
  });
  // Placeholders for register inputs
  const fnInput=document.getElementById('cvRegFn');
  if(fnInput) fnInput.placeholder=at('fnPlaceholder');
  const lnInput=document.getElementById('cvRegLn');
  if(lnInput) lnInput.placeholder=at('lnPlaceholder');
  const sendCodeFullBtn=document.getElementById('cvSendCodeBtn');
  if(sendCodeFullBtn) sendCodeFullBtn.innerHTML=`<i class="fas fa-paper-plane"></i> ${at('sendCodeFull')}`;
  const verifyCodeFullBtn=document.getElementById('cvVerifyCodeBtn');
  if(verifyCodeFullBtn) verifyCodeFullBtn.innerHTML=`<i class="fas fa-circle-check"></i> ${at('verifyCodeFull')}`;
  const codeInput2=document.getElementById('cvRegEmailCode');
  if(codeInput2) codeInput2.placeholder=at('verifyCodeEnter');
  const resendBtn=document.getElementById('cvResendCodeBtn');
  if(resendBtn) resendBtn.textContent=at('resendCodeBtn');
  const forgotLink=document.getElementById('cvForgotLink');
  if(forgotLink) forgotLink.textContent=at('forgotLink');
  const forgotTitle=document.getElementById('cvForgotTitle');
  if(forgotTitle) forgotTitle.textContent=at('forgotTitle');
  const forgotLead=document.getElementById('cvForgotLead');
  if(forgotLead) forgotLead.textContent=at('forgotLead');
  const forgotSendBtn=document.getElementById('cvForgotSendBtn');
  if(forgotSendBtn) forgotSendBtn.innerHTML=`<i class="fas fa-paper-plane"></i> ${at('forgotSendBtn')}`;
  const forgotResetBtn=document.getElementById('cvForgotResetBtn');
  if(forgotResetBtn) forgotResetBtn.innerHTML=`<i class="fas fa-unlock-keyhole"></i> ${at('forgotResetBtn')}`;
  const forgotResendBtn=document.getElementById('cvForgotResendBtn');
  if(forgotResendBtn) forgotResendBtn.textContent=at('resendCodeBtn');
  setT('cvToRegister',    'toReg'); // partial text
  setT('cvToLogin',       'toLogin');
  setT('cvModeTitle','modeTitle');
  setT('cvModeLead','modeLead');
  setT('cvModeLoginLabel','modeLoginLabel'); setT('cvModeLoginDesc','modeLoginDesc');
  setT('cvModeRegLabel','modeRegLabel'); setT('cvModeRegDesc','modeRegDesc');
  setT('cvModeGuestLabel','modeGuestLabel'); setT('cvModeGuestDesc','modeGuestDesc');
  // switch links
  const toReg=document.getElementById('cvToRegister');
  if(toReg) toReg.innerHTML=`${at('toReg')} <span onclick="cvShowRegister()">${at('toRegLink')}</span>`;
  const toLogin=document.getElementById('cvToLogin');
  if(toLogin) toLogin.innerHTML=`${at('toLogin')} <span onclick="cvShowLogin()">${at('toLoginLink')}</span>`;
  // buttons with icons
  const loginBtn=document.getElementById('cvLoginBtn');
  if(loginBtn) loginBtn.innerHTML=`<i class="fas fa-sign-in-alt"></i> ${at('loginBtn')}`;
  const regBtn=document.getElementById('cvRegBtn');
  if(regBtn) regBtn.innerHTML=`<i class="fas fa-user-plus"></i> ${at('regBtn')}`;
  if(!window._cvEmailVerification || !window._cvEmailVerification.verified){
    cvSetVerifyStatus('info', at('verifyPending'));
  }
  // dashboard
  setT('cvDashTitle','dashTitle'); setT('cvDashNewBtn','dashNewBtn');
  updateNavbar();
  renderDashboard();
}

/* ── Update Navbar Auth Buttons ── */
function updateNavbar(){
  document.querySelectorAll('.cv-nav-auth-wrap').forEach(wrap=>{
    const session = getSession();
    if(session){
      const firstInitial = ((session.fn||'')[0]||'');
      const lastInitial = ((session.ln||'')[0]||'');
      const initials = (firstInitial + lastInitial).toUpperCase() || 'U';
      const displayName = [session.fn, session.ln].filter(Boolean).join(' ') || (session.email ? session.email.split('@')[0] : 'User');
      wrap.innerHTML = `<div class="cv-user-chip">
        <div class="cv-user-profile">
          <div class="cv-user-avatar">${session && session.photo ? `<img src="${session.photo}" alt="avatar" onerror="this.parentNode.innerHTML='${initials}'">` : initials}</div>
          <div class="cv-user-meta">
            <span class="cv-user-label">Account</span>
            <span class="cv-user-name">${displayName}</span>
          </div>
        </div>
        <button class="cv-dash-link" onclick="cvOpenDashboard()">
          <i class="fas fa-calendar-check"></i><span>${at('dashTitle')}</span>
        </button>
        <button class="cv-logout" onclick="cvLogout()" title="${at('logoutBtn')}"><i class="fas fa-right-from-bracket"></i></button>
      </div>`;
    } else {
      wrap.innerHTML = `<button class="cv-auth-btn" onclick="cvShowMode()">
        <span class="cv-auth-icon"><i class="fas fa-user-circle"></i></span>
        <span class="cv-auth-label">${at('authNavBtn')}</span>
      </button>`;
    }
  });
}

/* ── Inject auth wrap into all navbars ── */
function injectNavbarAuth(){
  document.querySelectorAll('.navbar').forEach(nav=>{
    if(nav.querySelector('.cv-nav-auth-wrap')) return; // already injected
    const wrap = document.createElement('div');
    wrap.className = 'cv-nav-auth-wrap';
    // Insert before theme toggle or at end of second child
    const themeWrap = nav.querySelector('.theme-toggle');
    const langWrap  = nav.querySelector('.lang-selector');
    const container = (themeWrap && themeWrap.parentElement) || (langWrap && langWrap.parentElement) || nav;
    if(themeWrap) container.insertBefore(wrap, themeWrap);
    else container.appendChild(wrap);
  });
  updateNavbar();
}

/* ── Open/Close Auth ── */
window.cvOpenAuth = function(mode){
  document.getElementById('cvAuthOverlay').style.display='flex';
  mode==='register' ? cvShowRegister() : cvShowLogin();
};
window.cvCloseAuth = function(){
  document.getElementById('cvAuthOverlay').style.display='none';
};
window.cvShowLogin = function(){
  document.getElementById('cvLoginForm').style.display='';
  document.getElementById('cvRegisterForm').style.display='none';
  document.getElementById('cvLoginErr').className='cv-err';
};
window.cvShowRegister = function(){
  document.getElementById('cvLoginForm').style.display='none';
  document.getElementById('cvRegisterForm').style.display='';
  document.getElementById('cvRegErr').className='cv-err';
  cvSetVerifyStatus('info', at('verifyPending'));
  cvUpdateVerificationUi('register');
};
window.cvTogglePassword = function(inputId, btn){
  const input = document.getElementById(inputId);
  if(!input || !btn) return;
  const icon = btn.querySelector('i');
  const isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';
  if(icon){
    icon.className = isHidden ? 'fas fa-eye-slash' : 'fas fa-eye';
  }
};

/* ── Mode Modal ── */
window.cvShowMode = function(fromBooking){
  // Show/hide Guest card based on context
  const guestCard = document.getElementById('cvModeGuestCard');
  if(guestCard) guestCard.style.display = fromBooking ? '' : 'none';
  document.getElementById('cvModeOverlay').style.display='flex';
};
window.cvCloseMode = function(){
  document.getElementById('cvModeOverlay').style.display='none';
};
window.cvModeLogin = function(){
  cvCloseMode(); cvOpenAuth('login');
};
window.cvModeRegister = function(){
  cvCloseMode(); cvOpenAuth('register');
};
window.cvModeGuest = function(){
  cvCloseMode();
  window._cvPendingBooking = false;
  if(typeof _origSSS === 'function') _origSSS();
};

/* Override Book a Caregiver button to show mode modal if not logged in */
const _origSSS = window.showServiceSelection;
window.showServiceSelection = function(){
  const session = getSession();
  if(session){
    if(_origSSS) _origSSS();
  } else {
    cvShowMode(true); // fromBooking = true → show Guest option
    window._cvPendingBooking = true;
  }
};

/* ── Register (Firebase Auth + Firestore) ── */
window.cvDoRegister = async function(){
  const fn=document.getElementById('cvRegFn').value.trim();
  const ln=document.getElementById('cvRegLn').value.trim();
  const bd=document.getElementById('cvRegBd').value;
  const phone=(document.getElementById('cvRegPhone')?.value||'').trim();
  const em=document.getElementById('cvRegEm').value.trim().toLowerCase();
  const pw=document.getElementById('cvRegPw').value;
  const pw2=document.getElementById('cvRegPw2').value;
  const errEl=document.getElementById('cvRegErr');
  const showErr=(msg)=>{ errEl.textContent=msg; errEl.className='cv-err show'; };
  errEl.className='cv-err';
  if(!fn||!ln||!bd||!em||!pw||!pw2) return showErr(at('errFill'));
  if(!isValidEmailLocal(em)) return showErr(at('errEmail'));
  if(pw.length<6) return showErr(at('errPass'));
  if(pw!==pw2) return showErr(at('errPassMatch'));
  const verification = window._cvEmailVerification || {};
  if(!(verification.verified && verification.email===em && Date.now() <= verification.expiresAt)) return showErr(at('errVerifyEmail'));
  try{
    const cred = await window.cvFirebaseAuth.createUserWithEmailAndPassword(em, pw);
    const user = cred.user;
    try{ await user.sendEmailVerification(); }catch(mailErr){ console.warn('Email verification link could not be sent from Firebase:', mailErr); }
    await window.cvFirebaseDb.collection('users').doc(user.uid).set({
      uid:user.uid,
      fn,
      ln,
      bd,
      phone,
      email:em,

      city:'',
      photo:'',
      emailVerified:true,
      accountActive:true,
      createdAt:new Date().toISOString()
    });
    setSession({id:user.uid, uid:user.uid, fn, ln, email:em, phone:phone||'', city:'', photo:'', emailVerified:true, accountActive:true});
    cvShowToast('CareVia', at('verifySuccess'));
    cvResetEmailVerification({keepStatus:true});
    cvCloseAuth();
    updateNavbar();
    cvOpenDashboard();
    if(window._cvPendingBooking){ window._cvPendingBooking=false; if(_origSSS) _origSSS(); }
  }catch(error){
    if(error && error.code==='auth/email-already-in-use') return showErr(at('errExists'));
    if(error && error.code==='auth/invalid-email') return showErr(at('errEmail'));
    if(error && error.code==='auth/weak-password') return showErr(at('errPass'));
    console.error(error);
    return showErr((error && error.message) || at('errNotFound'));
  }
};

/* ── Login (Firebase Auth + Firestore) ── */
window.cvDoLogin = async function(){
  const em=document.getElementById('cvLoginEmail').value.trim().toLowerCase();
  const pw=document.getElementById('cvLoginPass').value;
  const errEl=document.getElementById('cvLoginErr');
  const showErr=(msg)=>{ errEl.textContent=msg; errEl.className='cv-err show'; };
  errEl.className='cv-err';
  if(!em||!pw) return showErr(at('errFill'));
  try{
    const cred = await window.cvFirebaseAuth.signInWithEmailAndPassword(em, pw);
    const user = cred.user;
    let session = {id:user.uid, fn:'', ln:'', email:user.email || em};
    try{
      const doc = await window.cvFirebaseDb.collection('users').doc(user.uid).get();
      if(doc.exists){
        const data = doc.data() || {};
        session = {
          id:user.uid, uid:user.uid,
          fn:data.fn || data.firstName || '',
          ln:data.ln || data.lastName || '',
          email:data.email || user.email || em,
          phone:data.phone || '', city:data.city || '', photo:data.photo || '',
          emailVerified:data.emailVerified !== false, accountActive:data.accountActive !== false
        };
      }
    }catch(e){ console.error(e); }
    setSession(session);
    cvCloseAuth();
    updateNavbar();
    cvOpenDashboard();
    if(window._cvPendingBooking){ window._cvPendingBooking=false; if(_origSSS) _origSSS(); }
  }catch(error){
    if(error && (error.code==='auth/user-not-found' || error.code==='auth/wrong-password' || error.code==='auth/invalid-credential' || error.code==='auth/invalid-login-credentials')) return showErr(at('errNotFound'));
    console.error(error);
    return showErr((error && error.message) || at('errNotFound'));
  }
};

/* ── Logout ── */
/* Logout with confirmation */
window.cvLogout = function(){
  // Show confirmation popup instead of logging out directly
  const overlay = document.getElementById('cvLogoutOverlay');
  if(overlay) overlay.style.display='flex';
  // Apply translations
  const t = {
    ar:{ title:'تسجيل الخروج', desc:'هل أنت متأكد أنك تريد تسجيل الخروج؟', confirm:'تأكيد الخروج', cancel:'إلغاء' },
    fr:{ title:'Déconnexion', desc:'Êtes-vous sûr de vouloir vous déconnecter ?', confirm:'Se déconnecter', cancel:'Annuler' },
    en:{ title:'Sign Out', desc:'Are you sure you want to sign out of your account?', confirm:'Sign Out', cancel:'Cancel' },
    es:{ title:'Cerrar sesión', desc:'¿Estás seguro de que quieres cerrar sesión?', confirm:'Cerrar sesión', cancel:'Cancelar' },
    de:{ title:'Abmelden', desc:'Möchten Sie sich wirklich abmelden?', confirm:'Abmelden', cancel:'Abbrechen' },
  };
  const lang = (typeof currentLang !== 'undefined' ? currentLang : 'en') || 'en';
  const tx = t[lang] || t.en;
  const el = (id,txt)=>{ const e=document.getElementById(id); if(e) e.textContent=txt; };
  el('cvLogoutTitle', tx.title);
  el('cvLogoutDesc', tx.desc);
  el('cvLogoutConfirmBtn', tx.confirm);
  el('cvLogoutCancelBtn', tx.cancel);
};
window.cvCancelLogout = function(){
  const overlay = document.getElementById('cvLogoutOverlay');
  if(overlay) overlay.style.display='none';
};
window.cvConfirmLogout = async function(){
  const overlay = document.getElementById('cvLogoutOverlay');
  if(overlay) overlay.style.display='none';
  await cvDoLogout();
};
window.cvDoLogout = async function(){
  try{
    if(window.cvFirebaseAuth && typeof window.cvFirebaseAuth.signOut === 'function'){
      await window.cvFirebaseAuth.signOut();
    }
  }catch(e){
    console.error(e);
  }
  clearSession();
  try{
    if(window._cvEmailVerification){
      window._cvEmailVerification = null;
    }
    if(window._cvResetFlow){
      window._cvResetFlow = null;
    }
  }catch(_e){}
  updateNavbar();
  renderDashboard();
  try{ navigateTo('homeView'); }catch(_e){}
  try{ closeAuthModal && closeAuthModal(); }catch(_e){}
  try{ window.scrollTo({top:0,behavior:'auto'}); }catch(_e){}
  try{ cvShowToast('CareVia', 'Signed out successfully', 'fa-right-from-bracket'); }catch(_e){}
};

window.cvFirebaseAuth.onAuthStateChanged(async function(user){
  if(user){
    try{
      const snap = await window.cvFirebaseDb.collection('users').doc(user.uid).get();
      if(snap.exists){
        const data = snap.data() || {};
        setSession({
          id:user.uid, uid:user.uid,
          fn:data.fn || data.firstName || '',
          ln:data.ln || data.lastName || '',
          email:data.email || user.email || '',
          phone:data.phone || '', city:data.city || '', photo:data.photo || '',
          emailVerified:data.emailVerified !== false, accountActive:data.accountActive !== false
        });
      } else {
        setSession({id:user.uid, uid:user.uid, fn:'', ln:'', email:user.email || '', emailVerified:user.emailVerified, accountActive:true});
      }
    }catch(e){
      console.error(e);
      setSession({id:user.uid, uid:user.uid, fn:'', ln:'', email:user.email || '', emailVerified:user.emailVerified, accountActive:true});
    }
  } else {
    clearSession();
  }
  updateNavbar();
});

function cvPushNotification(userId, title, body, icon='fa-bell'){
  if(!userId) return;
  const key = `careviaNotifications_${userId}`;
  const items = dbGet(key);
  items.unshift({id:`n_${Date.now()}`, title, body, icon, createdAt:new Date().toISOString()});
  dbSet(key, items.slice(0, 20));
}
function cvGetNotifications(userId){ return userId ? dbGet(`careviaNotifications_${userId}`) : []; }
function cvSyncProfileAvatarPreview(){
  const input = document.getElementById('cvProfilePhoto');
  const holder = document.getElementById('cvEditorAvatar');
  const session = getSession() || {};
  if(!holder) return;
  const initials = `${(document.getElementById('cvProfileFn')?.value || session.fn || '')[0] || ''}${(document.getElementById('cvProfileLn')?.value || session.ln || '')[0] || ''}`.toUpperCase() || 'CU';
  const photo = (input?.value || '').trim();
  if(photo){
    holder.innerHTML = `<img src="${photo}" alt="avatar" onerror="this.parentNode.innerHTML='<span>${initials}</span>'">`;
  }else{
    holder.innerHTML = `<span>${initials}</span>`;
  }
}
window.cvHandlePhotoUpload = function(event){
  const file = event.target.files[0];
  if(!file) return;
  if(file.size > 2 * 1024 * 1024){
    cvShowToast('CareVia', 'Max file size is 2MB', 'fa-circle-exclamation');
    return;
  }
  const reader = new FileReader();
  reader.onload = function(e){
    const dataUrl = e.target.result;
    // update hidden input
    const urlInput = document.getElementById('cvProfilePhoto');
    if(urlInput) urlInput.value = dataUrl;
    // update thumb preview
    const thumb = document.getElementById('cvPhotoThumb');
    if(thumb) thumb.innerHTML = `<img src="${dataUrl}" alt="avatar">`;
    // update editor avatar
    cvSyncProfileAvatarPreview();
  };
  reader.readAsDataURL(file);
};

window.cvSaveProfile = async function(){
  const session=getSession(); if(!session) return;
  const fn=(document.getElementById('cvProfileFn')?.value||'').trim();
  const ln=(document.getElementById('cvProfileLn')?.value||'').trim();
  const phone=(document.getElementById('cvProfilePhone')?.value||'').trim();
  const cityEl=document.getElementById('cvProfileCity');
  const city=(cityEl?.value||cityEl?.options?.[cityEl.selectedIndex]?.value||'').trim();
  const photo=(document.getElementById('cvProfilePhoto')?.value||'').trim();
  if(!fn||!ln){ cvShowToast('CareVia', at('errFill')||'Please fill required fields', 'fa-circle-exclamation'); return; }
  try{
    await window.cvFirebaseDb.collection('users').doc(session.uid || session.id).set({
      fn, ln, phone, city, photo,
      email: session.email || '',
      emailVerified: session.emailVerified !== false,
      accountActive: session.accountActive !== false,
      updatedAt: new Date().toISOString()
    }, {merge:true});
    const updated={...session, fn, ln, phone, city, photo};
    setSession(updated); updateNavbar(); renderDashboard();
    cvShowToast('CareVia', at('saveSuccess'));
  }catch(err){ console.error(err); cvShowToast('CareVia', (err&&err.message)||'Save failed', 'fa-circle-exclamation'); }
};

/* ═══════════════════════════════════════════════════
   CANCEL BOOKING
═══════════════════════════════════════════════════ */
// ╔══════════════════════════════════════════╗
// ║  Google Sheet Webhook URL — configure   ║
// ║  Paste your Apps Script Web App URL     ║
// ╚══════════════════════════════════════════╝
var CV_CANCEL_SHEET_URL = ''; // e.g. 'https://script.google.com/macros/s/XXXX/exec'

window.cvWithin12Hours = function(createdAt) {
  if (!createdAt) return true;
  var diff = new Date() - new Date(createdAt);
  return diff <= 12 * 60 * 60 * 1000;
};

window.cvUpdateCancelBtn = function() {
  var selected = document.querySelector('input[name="cvCancelReason"]:checked');
  var otherArea = document.getElementById('cvCancelOtherText');
  var btn = document.getElementById('cvConfirmCancelBtn');
  if (!btn) return;
  if (selected && selected.value === 'other') {
    if (otherArea) otherArea.style.display = 'block';
    var ok = otherArea && otherArea.value.trim().length > 0;
    btn.disabled = !ok; btn.style.opacity = ok ? '1' : '.45'; btn.style.cursor = ok ? 'pointer' : 'not-allowed';
  } else {
    if (otherArea) otherArea.style.display = 'none';
    btn.disabled = !selected; btn.style.opacity = selected ? '1' : '.45'; btn.style.cursor = selected ? 'pointer' : 'not-allowed';
  }
};

window.cvShowCancelConfirm = function(bookingId) {
  var overlay = document.createElement('div');
  overlay.className = 'cv-cancel-overlay';
  overlay.id = 'cvCancelOverlay';
  var lang = (typeof currentLang !== 'undefined' ? currentLang : 'en');
  var labels = {
    ar: {
      title: 'إلغاء الحجز', reasonTitle: 'ما سبب الإلغاء؟',
      reasons: [
        { id: 'no_need',      text: 'لم أعد بحاجة للخدمة' },
        { id: 'changed_mind', text: 'غيرت رأيي' },
        { id: 'price',        text: 'السعر لا يناسبني' },
        { id: 'other',        text: 'سبب آخر' }
      ],
      otherPlaceholder: 'اكتب سببك هنا...', confirm: 'تأكيد الإلغاء', keep: 'لا، ابقِه'
    },
    fr: {
      title: 'Annuler la réservation', reasonTitle: "Motif d'annulation ?",
      reasons: [
        { id: 'no_need',      text: "Je n'ai plus besoin du service" },
        { id: 'changed_mind', text: "J'ai changé d'avis" },
        { id: 'price',        text: 'Le prix ne me convient pas' },
        { id: 'other',        text: 'Autre raison' }
      ],
      otherPlaceholder: 'Écrivez votre raison...', confirm: "Confirmer l'annulation", keep: 'Non, garder'
    },
    en: {
      title: 'Cancel Booking', reasonTitle: 'Why are you cancelling?',
      reasons: [
        { id: 'no_need',      text: 'No longer need the service' },
        { id: 'changed_mind', text: 'I changed my mind' },
        { id: 'price',        text: "The price doesn't suit me" },
        { id: 'other',        text: 'Other reason' }
      ],
      otherPlaceholder: 'Write your reason here...', confirm: 'Confirm cancellation', keep: 'Keep it'
    },
    es: {
      title: 'Cancelar reserva', reasonTitle: '¿Por qué cancelas?',
      reasons: [
        { id: 'no_need',      text: 'Ya no necesito el servicio' },
        { id: 'changed_mind', text: 'Cambié de opinión' },
        { id: 'price',        text: 'El precio no me conviene' },
        { id: 'other',        text: 'Otra razón' }
      ],
      otherPlaceholder: 'Escribe tu razón aquí...', confirm: 'Confirmar cancelación', keep: 'No, mantener'
    },
    de: {
      title: 'Buchung stornieren', reasonTitle: 'Warum stornierst du?',
      reasons: [
        { id: 'no_need',      text: 'Benötige den Service nicht mehr' },
        { id: 'changed_mind', text: 'Meinung geändert' },
        { id: 'price',        text: 'Preis passt mir nicht' },
        { id: 'other',        text: 'Anderer Grund' }
      ],
      otherPlaceholder: 'Schreibe deinen Grund hier...', confirm: 'Stornierung bestätigen', keep: 'Behalten'
    }
  };
  var L = labels[lang] || labels.en;
  var reasonsHtml = L.reasons.map(function(r) {
    return '<label class="cv-cancel-reason-option" for="cv-reason-' + r.id + '">' +
      '<input type="radio" name="cvCancelReason" id="cv-reason-' + r.id + '" value="' + r.id + '" onchange="cvUpdateCancelBtn()">' +
      '<span>' + r.text + '</span>' +
    '</label>';
  }).join('');
  overlay.innerHTML = '<div class="cv-cancel-modal">' +
    '<i class="fas fa-circle-xmark big"></i>' +
    '<h3>' + L.title + '</h3>' +
    '<p class="cv-cancel-reason-title">' + L.reasonTitle + '</p>' +
    '<div class="cv-cancel-reasons">' + reasonsHtml + '</div>' +
    '<textarea id="cvCancelOtherText" class="cv-cancel-other-textarea" placeholder="' + L.otherPlaceholder + '" style="display:none;" rows="3" oninput="cvUpdateCancelBtn()"></textarea>' +
    '<div class="cv-cancel-modal-btns" style="margin-top:1.2rem;">' +
      '<button class="cv-keep-btn" onclick="cvCloseCancelOverlay()">' + L.keep + '</button>' +
      '<button class="cv-confirm-cancel-btn" id="cvConfirmCancelBtn" onclick="cvDoCancel(\'' + bookingId + '\')" disabled style="opacity:.45;cursor:not-allowed;">' + L.confirm + '</button>' +
    '</div>' +
  '</div>';
  document.body.appendChild(overlay);
  overlay.addEventListener('click', function(e){ if(e.target === overlay) cvCloseCancelOverlay(); });
};


window.cvCloseCancelOverlay = function() {
  var el = document.getElementById('cvCancelOverlay');
  if (el) el.remove();
};

window.cvDoCancel = async function(bookingId) {
  var selected = document.querySelector('input[name="cvCancelReason"]:checked');
  var lang = (typeof currentLang !== 'undefined' ? currentLang : 'en');
  var reasonMap = {
    ar: { no_need:'لم أعد بحاجة للخدمة', changed_mind:'غيرت رأيي', price:'السعر لا يناسبني', other:'سبب آخر' },
    fr: { no_need:"Je n'ai plus besoin du service", changed_mind:"J'ai changé d'avis", price:'Le prix ne me convient pas', other:'Autre raison' },
    en: { no_need:'No longer need the service', changed_mind:'I changed my mind', price:"Price doesn't suit me", other:'Other' },
    es: { no_need:'Ya no necesito el servicio', changed_mind:'Cambié de opinión', price:'El precio no me conviene', other:'Otra razón' },
    de: { no_need:'Service nicht mehr nötig', changed_mind:'Meinung geändert', price:'Preis passt nicht', other:'Anderer Grund' }
  };
  var reasonId = selected ? selected.value : 'unknown';
  var reasonText = ((reasonMap[lang] || reasonMap.en)[reasonId]) || reasonId;
  var otherText = '';
  if (reasonId === 'other') {
    var otherArea = document.getElementById('cvCancelOtherText');
    otherText = otherArea ? otherArea.value.trim() : '';
  }
  cvCloseCancelOverlay();
  var DB_ORDERS_KEY = 'careviaOrders';
  var cancelledAt = new Date().toISOString();
  var cancelledOrder = null;
  // Update localStorage
  try {
    var orders = JSON.parse(localStorage.getItem(DB_ORDERS_KEY) || '[]');
    cancelledOrder = orders.find(function(o){ return o.bookingId === bookingId; });
    orders = orders.map(function(o) {
      if (o.bookingId === bookingId) return Object.assign({}, o, {
        status: 'cancelled', cancelledAt: cancelledAt,
        cancelReason: reasonId,
        cancelReasonText: reasonId === 'other' ? otherText : reasonText
      });
      return o;
    });
    localStorage.setItem(DB_ORDERS_KEY, JSON.stringify(orders));
  } catch(e) {}
  // Send to Google Sheet
  try {
    var sheetUrl = (typeof CV_CANCEL_SHEET_URL !== 'undefined' && CV_CANCEL_SHEET_URL) ? CV_CANCEL_SHEET_URL : '';
    if (sheetUrl) {
      var session = (typeof getSession === 'function') ? getSession() : null;
      var payload = {
        bookingId: bookingId,
        clientName: session ? ((session.fn||'')+' '+(session.ln||'')).trim() : '',
        clientEmail: session ? (session.email||'') : '',
        clientPhone: session ? (session.phone||'') : '',
        service: cancelledOrder ? (cancelledOrder.service||cancelledOrder.type||'') : '',
        date: cancelledOrder ? (cancelledOrder.date||'') : '',
        city: cancelledOrder ? (cancelledOrder.city||'') : '',
        total: cancelledOrder ? (cancelledOrder.total||'') : '',
        cancelReason: reasonId === 'other' ? otherText : reasonText,
        cancelReasonId: reasonId,
        cancelledAt: cancelledAt
      };
      fetch(sheetUrl, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(function(e){ console.warn('Sheet send failed:', e); });
    }
  } catch(e) { console.warn('Sheet send error:', e); }
  // Update Firebase if available
  try {
    if (window.cvFirebaseDb) {
      var snap = await window.cvFirebaseDb.collection('orders')
        .where('bookingId', '==', bookingId).limit(1).get();
      if (!snap.empty) {
        await snap.docs[0].ref.update({
          status: 'cancelled', cancelledAt: cancelledAt,
          cancelReason: reasonId,
          cancelReasonText: reasonId === 'other' ? otherText : reasonText
        });
      }
    }
  } catch(e) { console.warn('Firebase cancel failed:', e); }
  // Update card in DOM
  var card = document.getElementById('cv-booking-' + bookingId);
  if (card) {
    card.style.borderLeftColor = '#e74c3c';
    var statusEl = card.querySelector('.cv-status');
    if (statusEl) statusEl.outerHTML = '<span class="cv-status cv-status-cancelled"><i class="fas fa-circle-xmark" style="margin-inline-end:.35rem;"></i>' + (typeof at === 'function' ? at('statusCancelled') : 'Cancelled') + '</span>';
    var actions = card.querySelector('.cv-booking-actions');
    if (actions) actions.remove();
  }
  if (typeof cvShowToast === 'function') cvShowToast('CareVia', typeof at === 'function' ? (at('cancelSuccess')||'Booking cancelled') : 'Booking cancelled', 'fa-circle-check');
};


/* ═══════════════════════════════════════════════════
   RATE CAREGIVER
═══════════════════════════════════════════════════ */
window._cvRatingState = { bookingId: '', caregiver: '', stars: 0 };

window.cvShowRatingModal = function(bookingId, caregiver) {
  window._cvRatingState = { bookingId: bookingId, caregiver: caregiver, stars: 0 };
  var overlay = document.createElement('div');
  overlay.className = 'cv-rating-overlay';
  overlay.id = 'cvRatingOverlay';
  var lang = (typeof currentLang !== 'undefined' ? currentLang : 'en');
  var labels = {
    ar: { title: 'كيف كانت تجربتك؟', sub: caregiver ? 'قيّم ' + caregiver : 'قيّم مقدم الرعاية', placeholder: 'أضف تعليقاً (اختياري)...', submit: 'إرسال التقييم', skip: 'تخطي' },
    fr: { title: 'Comment était votre expérience ?', sub: caregiver ? 'Évaluez ' + caregiver : 'Évaluez le soignant', placeholder: 'Ajouter un commentaire (optionnel)...', submit: 'Envoyer', skip: 'Passer' },
    en: { title: 'How was your experience?', sub: caregiver ? 'Rate ' + caregiver : 'Rate your caregiver', placeholder: 'Add a comment (optional)...', submit: 'Submit rating', skip: 'Skip' },
    es: { title: '¿Cómo fue tu experiencia?', sub: caregiver ? 'Valora a ' + caregiver : 'Valora al cuidador', placeholder: 'Añade un comentario (opcional)...', submit: 'Enviar valoración', skip: 'Omitir' },
    de: { title: 'Wie war Ihre Erfahrung?', sub: caregiver ? caregiver + ' bewerten' : 'Pflegeperson bewerten', placeholder: 'Kommentar hinzufügen (optional)...', submit: 'Bewertung senden', skip: 'Überspringen' }
  };
  var L = labels[lang] || labels.en;
  var starsHtml = [1,2,3,4,5].map(function(n){
    return '<button class="cv-star-btn" data-star="' + n + '" onclick="cvSetStar(' + n + ')">★</button>';
  }).join('');
  overlay.innerHTML = '<div class="cv-rating-modal">' +
    '<h3>' + L.title + '</h3>' +
    '<p class="cv-rate-sub">' + L.sub + '</p>' +
    '<div class="cv-stars-row" id="cvStarsRow">' + starsHtml + '</div>' +
    '<textarea class="cv-rating-textarea" id="cvRatingComment" placeholder="' + L.placeholder + '" rows="3"></textarea>' +
    '<div class="cv-rating-modal-btns">' +
      '<button class="cv-skip-rating-btn" onclick="cvCloseRatingModal()">' + L.skip + '</button>' +
      '<button class="cv-submit-rating-btn" onclick="cvSubmitRating()">' + L.submit + '</button>' +
    '</div>' +
  '</div>';
  document.body.appendChild(overlay);
  overlay.addEventListener('click', function(e){ if(e.target === overlay) cvCloseRatingModal(); });
};

window.cvSetStar = function(n) {
  window._cvRatingState.stars = n;
  var btns = document.querySelectorAll('#cvStarsRow .cv-star-btn');
  btns.forEach(function(btn) {
    var s = parseInt(btn.getAttribute('data-star'));
    btn.classList.toggle('active', s <= n);
  });
};

window.cvCloseRatingModal = function() {
  var el = document.getElementById('cvRatingOverlay');
  if (el) el.remove();
};

window.cvSubmitRating = async function() {
  var state = window._cvRatingState;
  if (!state.stars) {
    var btns = document.querySelectorAll('#cvStarsRow .cv-star-btn');
    btns.forEach(function(b){ b.style.animation='shake .3s ease'; setTimeout(function(){ b.style.animation=''; }, 350); });
    return;
  }
  var comment = (document.getElementById('cvRatingComment')?.value || '').trim();
  var sess = (function(){ try{ return JSON.parse(localStorage.getItem('careviaSession')||'null'); }catch(e){ return null; } })();
  var ratingData = {
    bookingId: state.bookingId,
    caregiver: state.caregiver,
    stars: state.stars,
    comment: comment,
    userId: sess ? (sess.uid||sess.id||sess.email||'') : '',
    userName: sess ? ((sess.fn||'') + ' ' + (sess.ln||'')).trim() : '',
    createdAt: new Date().toISOString()
  };
  // Save to localStorage orders
  try {
    var orders = JSON.parse(localStorage.getItem('careviaOrders') || '[]');
    orders = orders.map(function(o) {
      if (o.bookingId === state.bookingId) return Object.assign({}, o, { rating: state.stars, ratingComment: comment });
      return o;
    });
    localStorage.setItem('careviaOrders', JSON.stringify(orders));
  } catch(e) {}
  // Save to Firebase
  try {
    if (window.cvFirebaseDb) {
      await window.cvFirebaseDb.collection('ratings').add(ratingData);
      var snap = await window.cvFirebaseDb.collection('orders').where('bookingId','==',state.bookingId).limit(1).get();
      if (!snap.empty) await snap.docs[0].ref.update({ rating: state.stars, ratingComment: comment });
    }
  } catch(e) { console.warn('Firebase rating failed:', e); }
  // Update card in DOM
  var card = document.getElementById('cv-booking-' + state.bookingId);
  if (card) {
    var actions = card.querySelector('.cv-booking-actions');
    if (actions) {
      var stars = state.stars;
      actions.innerHTML = '<span class="cv-rated-badge"><i class="fas fa-star"></i> ' + '★'.repeat(stars) + '☆'.repeat(5-stars) + ' (' + stars + '/5)</span>';
    }
  }
  cvCloseRatingModal();
  if (typeof cvShowToast === 'function') cvShowToast('CareVia', typeof at === 'function' ? (at('ratingSuccess')||'Thank you for your rating!') : 'Thank you for your rating! ⭐', 'fa-star');
};

window.cvSendResetLinkLogged = async function(){
  const session=getSession(); if(!session || !session.email) return;
  try{ await cvSendCustomPasswordResetEmail(session.email); cvShowToast('CareVia', at('forgotCodeVerified'), 'fa-key'); }
  catch(err){ console.error(err); cvShowToast('CareVia', (err&&err.message)||'Reset failed', 'fa-circle-exclamation'); }
};
function cvAvatarMarkup(session, initials){
  if(session && session.photo){ return `<img src="${session.photo}" alt="avatar" onerror="this.closest('.cv-dash-avatar').innerHTML='${initials}'">`; }
  return initials;
}

/* ── Open Dashboard ── */
window.cvOpenDashboard = function(){
  renderDashboard();
  navigateTo('dashboardView');
  requestAnimationFrame(()=>window.scrollTo({top:0,behavior:'auto'}));
  // Sync statuses from server in background
  const _sess = getSession();
  if(_sess){
    const _email = _sess.email || _sess.userId || '';
    if(_email) cvSyncOrderStatuses(_email);
  }
};

/* ── Render Dashboard ── */
/* ── Sync order statuses from Apps Script (Admin Panel) ── */
const CV_ADMIN_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxf3gnZ5ZPXdqK-xB-zrXTSptJ1dm_aG3SXB-HducyGFUAlyip6CgSuM_Kb6VdLjdjt/exec';

async function cvSyncOrderStatuses(userEmail) {
  if(!userEmail) return;
  try {
    const res = await fetch(CV_ADMIN_SCRIPT_URL + '?action=getBookings');
    if(!res.ok) return;
    const data = await res.json();
    if(!data.ok || !Array.isArray(data.bookings)) return;
    // Find bookings that belong to this user (match by email)
    const userBookings = data.bookings.filter(b =>
      (b.email || '').toLowerCase() === userEmail.toLowerCase()
    );
    if(!userBookings.length) return;
    // Update local orders with real statuses from server
    const localOrders = dbGet(DB_ORDERS);
    let changed = false;
    userBookings.forEach(serverBooking => {
      const idx = localOrders.findIndex(o => o.bookingId === serverBooking.bookingId);
      if(idx !== -1) {
        // Map admin panel status values to local status keys
        const statusMap = {
          'en attente': 'pending',
          'confirmé': 'confirmed',
          'terminé': 'completed',
          'annulé': 'cancelled',
          'in progress': 'inprogress',
          'pending': 'pending',
          'confirmed': 'confirmed',
          'completed': 'completed',
          'cancelled': 'cancelled',
          'inprogress': 'inprogress'
        };
        const rawStatus = (serverBooking.status || 'en attente').toLowerCase().trim();
        const mappedStatus = statusMap[rawStatus] || 'pending';
        if(localOrders[idx].status !== mappedStatus) {
          localOrders[idx].status = mappedStatus;
          localOrders[idx].updatedAt = new Date().toISOString();
          changed = true;
        }
      } else {
        // Booking exists on server but not locally — add it
        const statusMap = {
          'en attente': 'pending', 'confirmé': 'confirmed',
          'terminé': 'completed', 'annulé': 'cancelled',
          'in progress': 'inprogress', 'pending': 'pending',
          'confirmed': 'confirmed', 'completed': 'completed',
          'cancelled': 'cancelled', 'inprogress': 'inprogress'
        };
        const rawStatus = (serverBooking.status || 'en attente').toLowerCase().trim();
        const session = getSession();
        const userId = session ? (session.uid || session.id || session.userId || session.email) : userEmail;
        localOrders.push({
          userId,
          bookingId: serverBooking.bookingId,
          service: serverBooking.service || '—',
          date: serverBooking.date || '',
          time: serverBooking.timeSlots || '',
          location: serverBooking.city || '',
          status: statusMap[rawStatus] || 'pending',
          createdAt: serverBooking.createdAt || new Date().toISOString()
        });
        changed = true;
      }
    });
    if(changed){
      dbSet(DB_ORDERS, localOrders);
      renderDashboard(); // re-render with updated statuses
    }
  } catch(e) {
    console.warn('[CareVia] Could not sync statuses:', e);
  }
}

function renderDashboard(){
  const session = getSession();
  const dashTitle = document.getElementById('cvDashTitle');
  const dashWelcome = document.getElementById('cvDashWelcome');
  const dashNewBtn = document.getElementById('cvDashNewBtn');
  const dashList = document.getElementById('cvDashList');
  if(!dashList) return;
  if(dashTitle) dashTitle.textContent = at('dashTitle');
  if(dashNewBtn) dashNewBtn.innerHTML = `<i class="fas fa-plus-circle"></i> ${at('dashNewBtn')}`;
  if(!session){
    dashList.innerHTML = `<div class="cv-empty-dash"><i class="fas fa-user-lock"></i><p>${at('errNotFound')}</p></div>`;
    return;
  }
  const userId = session.uid || session.id || session.userId || session.email;
  if(dashWelcome) dashWelcome.textContent = `${at('welcomeMsg')} ${session.fn || ''} ${session.ln || ''}`.trim();
  const allOrders = dbGet(DB_ORDERS);
  const myOrders = allOrders.filter(o => (o.userId || o.uid || o.email) === userId).sort((a,b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  const notifications = cvGetNotifications(userId);
  const statusMap = { pending:'statusPending', confirmed:'statusConfirmed', inprogress:'statusInprogress', cancelled:'statusCancelled', completed:'statusCompleted' };
  const initials = `${(session.fn||'')[0]||''}${(session.ln||'')[0]||''}`.toUpperCase() || 'CU';
  const pendingCount = myOrders.filter(o => o.status === 'pending').length;
  const confirmedCount = myOrders.filter(o => o.status === 'confirmed').length;
  const inProgressCount = myOrders.filter(o => o.status === 'inprogress').length;
  const latestOrder = myOrders[0];
  const formatType = (o) => o.service || o.type || o.serviceKey || 'Care service';
  const formatDate = (d) => { if(!d) return '—'; const dt = new Date(d); if(isNaN(dt)) return d; return dt.toLocaleDateString(document.documentElement.lang === 'ar' ? 'ar-MA' : 'en-US', {year:'numeric', month:'short', day:'numeric'}); };
  const bookingHtml = myOrders.length ? myOrders.map(o => {
    const statusColors = { pending:'#e67e22', confirmed:'#27ae60', inprogress:'#2980b9', cancelled:'#e74c3c', completed:'#16a085' };
    const statusIcons  = { pending:'fa-hourglass-half', confirmed:'fa-circle-check', inprogress:'fa-truck-medical', cancelled:'fa-circle-xmark', completed:'fa-star' };
    const st = o.status || 'pending';
    const sColor = statusColors[st] || '#e67e22';
    const sIcon  = statusIcons[st]  || 'fa-hourglass-half';
    const createdFormatted = formatDate(o.createdAt);
    const dateFormatted = o.date ? formatDate(o.date) : '';
    const timeStr = Array.isArray(o.timeSlots) ? o.timeSlots.join(' · ') : (o.time || '');
    const price = o.total ? `${Number(o.total).toFixed(2)} MAD` : '';
    const caregiver = o.caregiver || '';
    const bId = o.bookingId || '';
    // Action buttons
    const canCancel = (st === 'pending') && cvWithin12Hours(o.createdAt);
    const canRate   = (st === 'completed' && !o.rating);
    const alreadyRated = (st === 'completed' && o.rating);
    const ratingStars = o.rating ? '★'.repeat(o.rating) + '☆'.repeat(5 - o.rating) : '';
    const actionsHtml = (canCancel || canRate || alreadyRated) ? `
      <div class="cv-booking-actions">
        ${canCancel ? `<button class="cv-action-btn cv-cancel-btn" onclick="cvShowCancelConfirm('${bId}')"><i class="fas fa-circle-xmark"></i> ${at('cancelBookingBtn')||'Cancel booking'}</button>` : ''}
        ${canRate   ? `<button class="cv-action-btn cv-rate-btn" onclick="cvShowRatingModal('${bId}','${caregiver.replace(/'/g,"\\'").replace(/"/g,'&quot;')}')"><i class="fas fa-star"></i> ${at('rateBtn')||'Rate caregiver'}</button>` : ''}
        ${alreadyRated ? `<span class="cv-rated-badge"><i class="fas fa-star"></i> ${ratingStars} (${o.rating}/5)</span>` : ''}
      </div>` : '';
    return `
    <div class="cv-booking-item" id="cv-booking-${bId}" style="border-left:4px solid ${sColor};padding-left:1rem;">
      <div class="cv-booking-main">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:.5rem;flex-wrap:wrap;margin-bottom:.45rem;">
          <h4 style="margin:0;font-size:1rem;color:var(--accent-dark);">${formatType(o)}</h4>
          <span class="cv-status cv-status-${st}"><i class="fas ${sIcon}" style="margin-inline-end:.35rem;"></i>${at(statusMap[st]||'statusPending')}</span>
        </div>
        <div class="cv-booking-meta">
          ${bId ? `<span class="cv-booking-pill" style="font-family:monospace;font-size:.74rem;"><i class="fas fa-hashtag"></i> ${bId}</span>` : ''}
          ${dateFormatted ? `<span class="cv-booking-pill"><i class="fas fa-calendar-alt"></i> ${dateFormatted}</span>` : ''}
          ${timeStr ? `<span class="cv-booking-pill"><i class="fas fa-clock"></i> ${timeStr}</span>` : ''}
          ${o.location ? `<span class="cv-booking-pill"><i class="fas fa-location-dot"></i> ${o.location}</span>` : ''}
          ${caregiver ? `<span class="cv-booking-pill"><i class="fas fa-user-nurse"></i> ${caregiver}</span>` : ''}
          ${price ? `<span class="cv-booking-pill" style="background:rgba(118,184,79,.15);color:var(--accent-dark);font-weight:800;"><i class="fas fa-tag"></i> ${price}</span>` : ''}
        </div>
        <div class="cv-booking-date"><i class="fas fa-clock-rotate-left" style="margin-inline-end:.35rem;opacity:.55;"></i>${at('createdLabel')||'Created'}: ${createdFormatted}</div>
        ${actionsHtml}
      </div>
    </div>`; }).join('') : `<div class="cv-empty-dash"><i class="fas fa-calendar-plus"></i><p>${at('emptyDash')}</p></div>`;
  const notifHtml = notifications.length ? notifications.map(n => `
    <div class="cv-notification-item"><i class="fas ${n.icon || 'fa-bell'}"></i><div><strong>${n.title}</strong><div>${n.body}</div><small>${formatDate(n.createdAt)}</small></div></div>`).join('') : `<div class="cv-empty-dash"><i class="fas fa-bell-slash"></i><p>${at('emptyDash')}</p></div>`;
  const waNumber = '212679631557';
  dashList.innerHTML = `
    <div class="cv-dash-shell">
      <div class="cv-dash-hero">
        <div>
          <div class="cv-dash-kicker"><i class="fas fa-sparkles"></i> ${at('dashKicker')}</div>
          <h2>${at('dashTitle')}</h2>
          <p>${at('welcomeMsg')} ${session.fn || ''} ${session.ln || ''}. ${at('dashLead')}</p>
          <div class="cv-dash-hero-actions">
            <button class="cv-dash-btn" onclick="navigateTo('homeView')"><i class="fas fa-plus"></i> ${at('dashNewBtn')}</button>
            <button class="cv-dash-btn-secondary" onclick="document.querySelector('.cv-dash-grid')?.scrollIntoView({behavior:'smooth', block:'start'})"><i class="fas fa-list-check"></i> ${at('dashViewActivity')}</button>
            <a class="cv-whatsapp-btn" href="https://wa.me/${waNumber}?text=${encodeURIComponent('Hello CareVia')}" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> ${at('whatsappLabel')}</a>
          </div>
        </div>
        <div class="cv-dash-hero-side">
          <div class="cv-dash-profile-card">
            <div class="cv-dash-user-row">
              <div class="cv-dash-avatar">${cvAvatarMarkup(session, initials)}</div>
              <div class="cv-dash-user-meta">
                <strong>${session.fn || ''} ${session.ln || ''}</strong>
                <span>${session.email || '—'}</span>
                <div class="cv-badge-row">
                  <div class="cv-pill-badge"><i class="fas fa-badge-check"></i> ${at('verifiedEmailLabel')}</div>
                  <div class="cv-pill-badge"><i class="fas fa-circle-check"></i> ${at('accountActiveLabel')}</div>
                </div>
              </div>
            </div>
            <div class="cv-dash-mini">
              <div class="cv-mini-box"><small>${at('totalRequestsLabel')}</small><strong>${myOrders.length}</strong></div>
              <div class="cv-mini-box"><small>${at('latestUpdateLabel')}</small><strong>${latestOrder ? formatDate(latestOrder.createdAt) : '—'}</strong></div>
            </div>
          </div>
        </div>
      </div>
      <div class="cv-dash-stats">
        <div class="cv-stat-card"><div class="cv-stat-top"><small>${at('totalRequestsLabel')}</small><div class="cv-stat-icon"><i class="fas fa-file-medical"></i></div></div><strong>${myOrders.length}</strong></div>
        <div class="cv-stat-card"><div class="cv-stat-top"><small>${at('statusPending')}</small><div class="cv-stat-icon"><i class="fas fa-hourglass-half"></i></div></div><strong>${pendingCount}</strong></div>
        <div class="cv-stat-card"><div class="cv-stat-top"><small>${at('statusConfirmed')}</small><div class="cv-stat-icon"><i class="fas fa-circle-check"></i></div></div><strong>${confirmedCount}</strong></div>
        <div class="cv-stat-card"><div class="cv-stat-top"><small>${at('statusInprogress')}</small><div class="cv-stat-icon"><i class="fas fa-truck-medical"></i></div></div><strong>${inProgressCount}</strong></div>
      </div>
      <div class="cv-dash-grid">
        <div class="cv-dash-panel">
          <div class="cv-dash-panel-head"><h3><i class="fas fa-list-ul"></i> ${at('myRequestsLabel')}</h3><span>${myOrders.length} ${at('itemsCountLabel')}</span></div>
          <div class="cv-booking-list">${bookingHtml}</div>
        </div>
        <div class="cv-dash-panel">
          <div class="cv-dash-panel-head"><h3><i class="fas fa-id-card"></i> ${at('profileSummaryLabel')}</h3><span>${at('userAccountLabel')}</span></div>
          <div class="cv-profile-list">
            <div class="cv-profile-row"><span>${at('firstNameLabel')}</span><strong>${session.fn || '—'}</strong></div>
            <div class="cv-profile-row"><span>${at('lastNameLabel')}</span><strong>${session.ln || '—'}</strong></div>
            <div class="cv-profile-row"><span>Email</span><strong>${session.email || '—'}</strong></div>
            <div class="cv-profile-row"><span>${at('phoneLabel')}</span><strong>${session.phone || '—'}</strong></div>
            <div class="cv-profile-row"><span>${at('cityLabel')}</span><strong>${session.city || '—'}</strong></div>
            <div class="cv-profile-row"><span>${at('accountStatusLabel')}</span><strong>${at('activeStatusLabel')}</strong></div>
          </div>
          <div class="cv-dash-panel-head" style="margin-top:1rem;"><h3><i class="fas fa-pen-to-square"></i> ${at('profileEditTitle')}</h3><span>${at('profileSaveBtn')}</span></div>
          <div class="cv-profile-editor">
            <div class="cv-editor-top">
              <div class="cv-editor-avatar" id="cvEditorAvatar">${session.photo ? `<img src="${session.photo}" alt="avatar" onerror="this.parentNode.innerHTML='<span>${initials}</span>'">` : `<span>${initials}</span>`}</div>
              <div class="cv-editor-copy">
                <strong>${session.fn || ''} ${session.ln || ''}</strong>
                <p>${session.email || '—'}</p>
                <div class="cv-editor-badges">
                  <div class="cv-pill-badge"><i class="fas fa-envelope-circle-check"></i> ${at('verifiedEmailLabel')}</div>
                  <div class="cv-pill-badge"><i class="fas fa-shield-heart"></i> ${at('accountActiveLabel')}</div>
                </div>
              </div>
            </div>
            <div class="cv-form-grid">
              <div class="cv-field-card"><label>${at('firstNameLabel')}</label><input id="cvProfileFn" type="text" value="${(session.fn||'').replace(/"/g,'&quot;')}" placeholder="${at('firstNameLabel')}"></div>
              <div class="cv-field-card"><label>${at('lastNameLabel')}</label><input id="cvProfileLn" type="text" value="${(session.ln||'').replace(/"/g,'&quot;')}" placeholder="${at('lastNameLabel')}"></div>
              <div class="cv-field-card"><label>${at('phoneLabel')}</label><input id="cvProfilePhone" type="tel" value="${(session.phone||'').replace(/"/g,'&quot;')}" placeholder="+212 6XX-XXXXXX"></div>
              <div class="cv-field-card"><label>${at('cityLabel')}</label>
                <select id="cvProfileCity" class="form-select" style="margin-top:0;">
                  ${['Tangier','Casablanca','Rabat','Fes','Marrakech','Agadir','Meknes','Oujda','Kenitra','Tetouan','Safi','El Jadida','Nador','Beni Mellal','Larache'].map(c=>`<option value="${c}" ${(session.city||'')=== c?'selected':''}>${c}</option>`).join('')}
                </select>
              </div>
              <div class="cv-field-card full cv-photo-upload-card">
                <label>${at('photoLabel')}</label>
                <div class="cv-photo-upload-row">
                  <div class="cv-photo-thumb" id="cvPhotoThumb">${session.photo?`<img src="${session.photo}" alt="avatar" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:16px" onerror="this.parentNode.innerHTML='<i class=\"fas fa-user\"></i>'">`:`<i class="fas fa-user"></i>`}</div>
                  <div class="cv-photo-upload-actions">
                    <label class="cv-upload-btn" for="cvPhotoFileInput">
                      <i class="fas fa-arrow-up-from-bracket"></i>
                      <span>${at('uploadPhotoBtn') || 'Upload photo'}</span>
                    </label>
                    <input id="cvPhotoFileInput" type="file" accept="image/*" style="display:none" onchange="cvHandlePhotoUpload(event)">
                    <input id="cvProfilePhoto" type="url" value="${(session.photo||'').replace(/"/g,'&quot;')}" placeholder="https://..." style="display:none">
                    <span class="cv-upload-hint">${at('uploadPhotoHint') || 'JPG, PNG, WEBP — max 2MB'}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="cv-reset-card">
              <strong>${at('changePasswordLabel')}</strong>
              <p>${at('forgotLead')}</p>
            </div>
            <div class="cv-panel-actions">
              <button class="cv-panel-save-btn" type="button" onclick="cvSaveProfile()">
                <span class="cv-panel-save-icon"><i class="fas fa-floppy-disk"></i></span>
                <span>${at('profileSaveBtn')}</span>
              </button>
              <button class="cv-panel-reset-btn" type="button" onclick="cvSendResetLinkLogged()">
                <span class="cv-panel-reset-icon"><i class="fas fa-key"></i></span>
                <span>${at('sendResetLinkLabel')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="cv-dash-grid" style="margin-top:1rem;">
        <div class="cv-dash-panel">
          <div class="cv-dash-panel-head"><h3><i class="fas fa-bell"></i> ${at('notificationsLabel')}</h3><span>${notifications.length}</span></div>
          <div class="cv-notification-list">${notifHtml}</div>
        </div>
        <div class="cv-dash-panel">
          <div class="cv-dash-panel-head"><h3><i class="fab fa-whatsapp"></i> ${at('whatsappLabel')}</h3><span>CareVia</span></div>
          <div class="cv-quick-actions">
            <div class="cv-quick-card"><i class="fas fa-bell"></i><div><strong>${at('updatesLabel')}</strong><span>${at('updatesDesc')}</span></div></div>
            <div class="cv-quick-card"><i class="fas fa-shield-heart"></i><div><strong>${at('secureAccountLabel')}</strong><span>${at('secureAccountDesc')}</span></div></div>
            <div class="cv-quick-card"><i class="fas fa-phone-volume"></i><div><strong>${at('fastContactLabel')}</strong><span>${at('fastContactDesc')}</span></div></div>
            <div class="cv-quick-card"><i class="fas fa-house-medical"></i><div><strong>${at('easyRebookingLabel')}</strong><span>${at('easyRebookingDesc')}</span></div></div>
          </div>
          <div class="cv-panel-actions"><a class="cv-whatsapp-btn" href="https://wa.me/${waNumber}?text=${encodeURIComponent('Hello CareVia, I need help with my account')}" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> ${at('whatsappLabel')}</a></div>
        </div>
      </div>
    </div>`;
  const bindIds = ['cvProfilePhoto','cvProfileFn','cvProfileLn'];
  bindIds.forEach(id => {
    const el = document.getElementById(id);
    if(el){ el.addEventListener('input', cvSyncProfileAvatarPreview); }
  });
}

/* ── Hook booking submissions to save to user account ── */
function hookBookingSubmit(){
  // Hook processPayment (standard booking)
  const _origPP = window.processPayment;
  if(_origPP){
    window.processPayment = async function(){
      const session = getSession();
      // Snapshot booking data BEFORE calling original (variables may reset after)
      const snapshotService = (typeof getServiceName === 'function' && typeof selectedService !== 'undefined') ? getServiceName(selectedService) : '—';
      const snapshotDate = (typeof selectedDate !== 'undefined') ? selectedDate : '';
      const snapshotTime = (typeof selectedTime !== 'undefined') ? selectedTime : '';
      const snapshotLocation = (typeof selectedCity !== 'undefined' && typeof cityLabel === 'function') ? cityLabel(selectedCity) : '';

      // Call original — it navigates to confirmationView on success, throws/shows popup on error
      await _origPP.apply(this, arguments);

      // Check if booking succeeded by verifying we are now on the confirmation view
      const confirmView = document.getElementById('confirmationView');
      const succeeded = confirmView && confirmView.classList.contains('active-view');

      if(session && succeeded){
        try{
          const refEl = document.getElementById('confirmationRef');
          const orderId = (refEl && refEl.textContent && refEl.textContent.trim())
            ? refEl.textContent.trim()
            : 'CV-' + String(Date.now()).slice(-6);
          const userId = session.uid || session.id || session.userId || session.email;
          // Avoid duplicate saves
          const orders = dbGet(DB_ORDERS);
          const alreadySaved = orders.some(o => o.bookingId === orderId && (o.userId === userId || o.uid === userId || o.email === userId));
          if(!alreadySaved){
            orders.push({
              userId,
              bookingId: orderId,
              service: snapshotService,
              date: snapshotDate,
              time: snapshotTime,
              location: snapshotLocation,
              status: 'pending',
              createdAt: new Date().toISOString()
            });
            dbSet(DB_ORDERS, orders);
            cvPushNotification(userId, at('notifCreated'), `${orderId} • ${at('statusPending')}`, 'fa-file-circle-plus');
            cvShowToast('CareVia', at('notifCreated'));
          }
        }catch(e){ console.warn('[CareVia] Failed to save order to dashboard:', e); }
      }
    };
  }
}



/* ── Custom password reset handler page ── */
const CV_RESET_TEXT = {
  ar:{heroTitle:'غيّر كلمة المرور بأمان',heroLead:'استعمل هاد الصفحة الآمنة باش تختار كلمة مرور جديدة وترجع مباشرة لحسابك داخل CareVia.',point1Title:'رابط موثوق',point1Text:'كنتحقق أولاً من صحة رابط الاسترجاع قبل تغيير كلمة المرور.',point2Title:'كلمة مرور قوية',point2Text:'اختار كلمة مرور جديدة فيها 6 حروف على الأقل.',point3Title:'الرجوع بسرعة',point3Text:'من بعد الحفظ تقدر ترجع مباشرة لتسجيل الدخول.',title:'إنشاء كلمة مرور جديدة',lead:'دخل كلمة المرور الجديدة. غادي نتحقق من رابط الاسترجاع ثم نحفظ التغيير.',state:'استرجاع آمن',pw:'كلمة المرور الجديدة',pw2:'تأكيد كلمة المرور',miniTitle:'بغيتي رابط جديد؟',miniText:'إلا انتهت صلاحية هاد الرابط، رجع لنافذة تسجيل الدخول واختر “نسيت كلمة المرور” باش يوصلك رابط جديد.',submit:'حفظ كلمة المرور الجديدة',back:'الرجوع إلى CareVia',invalid:'رابط تغيير كلمة المرور غير صالح أو منتهي الصلاحية.',saved:'تم تغيير كلمة المرور بنجاح. يمكنك الآن تسجيل الدخول.',saving:'جاري التحقق من الرابط...',mismatch:'كلمتا المرور غير متطابقتين.',short:'كلمة المرور خاصها تكون 6 حروف على الأقل.'},
  fr:{heroTitle:'Réinitialisez votre mot de passe en toute sécurité',heroLead:'Utilisez cette page sécurisée pour choisir un nouveau mot de passe et revenir rapidement à votre compte CareVia.',point1Title:'Lien vérifié',point1Text:'Nous vérifions d’abord que votre lien de récupération est valide.',point2Title:'Nouveau mot de passe',point2Text:'Choisissez un mot de passe d’au moins 6 caractères.',point3Title:'Retour rapide',point3Text:'Après l’enregistrement, vous pouvez revenir vous connecter immédiatement.',title:'Créer un nouveau mot de passe',lead:'Entrez votre nouveau mot de passe. Nous validerons d’abord le lien de récupération.',state:'Réinitialisation sécurisée',pw:'Nouveau mot de passe',pw2:'Confirmer le mot de passe',miniTitle:'Besoin d’un nouveau lien ?',miniText:'Si ce lien a expiré, revenez à la fenêtre de connexion et choisissez “Mot de passe oublié ?”.',submit:'Enregistrer le nouveau mot de passe',back:'Retour à CareVia',invalid:'Le lien de réinitialisation est invalide ou expiré.',saved:'Mot de passe changé avec succès. Vous pouvez maintenant vous connecter.',saving:'Vérification du lien en cours...',mismatch:'Les mots de passe ne correspondent pas.',short:'Le mot de passe doit contenir au moins 6 caractères.'},
  en:{heroTitle:'Reset your password safely',heroLead:'Use this secure page to choose a new password for your account and continue with a smoother CareVia experience.',point1Title:'Verified reset link',point1Text:'We first check that your email action link is valid.',point2Title:'Strong new password',point2Text:'Choose a password with at least 6 characters.',point3Title:'Back to login',point3Text:'After saving, you can return and sign in immediately.',title:'Create a new password',lead:'Enter your new password below. We will validate the reset code before saving your change.',state:'Secure reset',pw:'New password',pw2:'Confirm password',miniTitle:'Need to request a new link?',miniText:'If this link has expired, go back to the sign-in window and choose “Forgot password” to receive a fresh reset email.',submit:'Save new password',back:'Back to CareVia',invalid:'The password reset link is invalid or has expired.',saved:'Password changed successfully. You can sign in now.',saving:'Checking your reset link...',mismatch:'Passwords do not match.',short:'Password must be at least 6 characters.'}
};
function cvRt(k){ const lang=(window.currentLang||'en'); return (CV_RESET_TEXT[lang]&&CV_RESET_TEXT[lang][k]) || CV_RESET_TEXT.en[k] || k; }
function cvSetResetStatus(type,msg){ const el=document.getElementById('cvResetStatus'); if(!el) return; el.className=`cv-reset-status show ${type||'info'}`; el.textContent=msg||''; }
function cvGetActionHandlerUrl(){
  try{
    if(window.location.protocol==='http:' || window.location.protocol==='https:') return window.location.origin + window.location.pathname;
  }catch(e){}
  return null;
}
async function cvSendCustomPasswordResetEmail(email){
  if(!window.cvFirebaseAuth) throw new Error('Auth unavailable');
  const url = cvGetActionHandlerUrl();
  if(url){
    return window.cvFirebaseAuth.sendPasswordResetEmail(email, { url, handleCodeInApp:false });
  }
  return window.cvFirebaseAuth.sendPasswordResetEmail(email);
}
window._cvResetFlow = { ready:false, code:'', email:'', mode:'' };
function cvRenderResetText(){
  const map={cvResetHeroTitle:'heroTitle',cvResetHeroLead:'heroLead',cvResetPoint1Title:'point1Title',cvResetPoint1Text:'point1Text',cvResetPoint2Title:'point2Title',cvResetPoint2Text:'point2Text',cvResetPoint3Title:'point3Title',cvResetPoint3Text:'point3Text',cvResetTitle:'title',cvResetLead:'lead',cvResetMiniTitle:'miniTitle',cvResetMiniText:'miniText',cvResetPwLabel:'pw',cvResetPw2Label:'pw2'};
  Object.entries(map).forEach(([id,key])=>{ const el=document.getElementById(id); if(el) el.textContent=cvRt(key); });
  const state=document.getElementById('cvResetState'); if(state) state.innerHTML=`<i class="fas fa-key"></i> ${cvRt('state')}`;
  const submit=document.getElementById('cvResetSubmitBtn'); if(submit) submit.innerHTML=`<i class="fas fa-floppy-disk"></i> ${cvRt('submit')}`;
  const back=document.getElementById('cvResetBackBtn'); if(back) back.innerHTML=`<i class="fas fa-arrow-left"></i> ${cvRt('back')}`;
}
window.cvCloseCustomReset = function(){
  const shell=document.getElementById('cvResetShell');
  if(shell) shell.style.display='none';
  try{ history.replaceState({}, '', window.location.pathname); }catch(e){}
  navigateTo('homeView');
  cvOpenAuth('login');
};
window.cvCompleteCustomPasswordReset = async function(){
  const st=window._cvResetFlow||{};
  const p1=(document.getElementById('cvResetPw')?.value||'').trim();
  const p2=(document.getElementById('cvResetPw2')?.value||'').trim();
  if(!st.ready || !st.code) return cvSetResetStatus('error', cvRt('invalid'));
  if(p1.length < 6) return cvSetResetStatus('error', cvRt('short'));
  if(p1 !== p2) return cvSetResetStatus('error', cvRt('mismatch'));
  try{
    cvSetResetStatus('info', cvRt('saving'));
    await window.cvFirebaseAuth.confirmPasswordReset(st.code, p1);
    cvSetResetStatus('success', cvRt('saved'));
    cvShowToast('CareVia', cvRt('saved'), 'fa-circle-check');
    setTimeout(()=>{ cvCloseCustomReset(); }, 1200);
  }catch(err){
    console.error(err);
    cvSetResetStatus('error', cvRt('invalid'));
  }
};
async function cvHandleCustomResetPage(){
  try{
    const params=new URLSearchParams(window.location.search);
    const mode=params.get('mode');
    const code=params.get('oobCode');
    if(mode!=='resetPassword' || !code) return;
    const shell=document.getElementById('cvResetShell');
    if(!shell || !window.cvFirebaseAuth) return;
    cvRenderResetText();
    shell.style.display='flex';
    cvSetResetStatus('info', cvRt('saving'));
    try{
      const email = await window.cvFirebaseAuth.verifyPasswordResetCode(code);
      window._cvResetFlow = { ready:true, code, email, mode };
      cvSetResetStatus('success', `${email} • ${cvRt('state')}`);
      const lead=document.getElementById('cvResetLead');
      if(lead) lead.textContent = `${cvRt('lead')} (${email})`;
      const pw=document.getElementById('cvResetPw'); if(pw) pw.focus();
    }catch(err){
      console.error(err);
      window._cvResetFlow = { ready:false, code:'', email:'', mode };
      cvSetResetStatus('error', cvRt('invalid'));
    }
  }catch(err){ console.error(err); }
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', ()=>{
  injectNavbarAuth();
  renderAuthText();
  hookBookingSubmit();
  // Close overlay on background click
  document.getElementById('cvAuthOverlay').addEventListener('click',function(e){
    if(e.target===this) cvCloseAuth();
  });
  document.getElementById('cvModeOverlay').addEventListener('click',function(e){ if(e.target===this) cvCloseMode(); });
  document.getElementById('cvForgotOverlay').addEventListener('click',function(e){ if(e.target===this) cvCloseForgot(); });
  cvUpdateVerificationUi('register'); cvUpdateVerificationUi('forgot');
  cvHandleCustomResetPage();
  // Keyboard Enter support
  ['cvLoginEmail','cvLoginPass'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.addEventListener('keydown',e=>{ if(e.key==='Enter') cvDoLogin(); });
  });
  ['cvRegFn','cvRegLn','cvRegBd','cvRegEm','cvRegPw','cvRegPw2'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.addEventListener('keydown',e=>{ if(e.key==='Enter') cvDoRegister(); });
  });
});

/* ── Multi-Step Register Navigation ── */
window.cvRegGoStep1 = function(reset){
  const p1=document.getElementById('cvRegPanel1');
  const p2=document.getElementById('cvRegPanel2');
  const p3=document.getElementById('cvRegPanel3');
  if(p1) p1.style.display='';
  if(p2) p2.style.display='none';
  if(p3) p3.style.display='none';
  const s1=document.getElementById('cvRegStep1Ind');
  const s2=document.getElementById('cvRegStep2Ind');
  const s3=document.getElementById('cvRegStep3Ind');
  const lines=document.querySelectorAll('.cv-reg-step-line');
  if(s1){ s1.className='cv-reg-step active'; }
  if(s2){ s2.className='cv-reg-step'; }
  if(s3){ s3.className='cv-reg-step'; }
  lines.forEach(l=>l.classList.remove('done'));
};
window.cvRegGoStep2 = function(){
  const fn=(document.getElementById('cvRegFn')?.value||'').trim();
  const ln=(document.getElementById('cvRegLn')?.value||'').trim();
  const phone=(document.getElementById('cvRegPhone')?.value||'').trim();
  const phoneErr=document.getElementById('cvRegPhoneErr');
  // Validate phone — must have at least 8 digits
  const phoneDigits = phone.replace(/\D/g,'');
  if(!fn||!ln){ return; }
  if(!phone || phoneDigits.length < 8){
    if(phoneErr){ phoneErr.textContent = at('errPhoneRequired') || 'رقم الهاتف مطلوب (8 أرقام على الأقل)'; phoneErr.style.display='block'; }
    document.getElementById('cvRegPhone')?.focus();
    return;
  }
  if(phoneErr) phoneErr.style.display='none';
  const p1=document.getElementById('cvRegPanel1');
  const p2=document.getElementById('cvRegPanel2');
  const p3=document.getElementById('cvRegPanel3');
  if(p1) p1.style.display='none';
  if(p2) p2.style.display='';
  if(p3) p3.style.display='none';
  const s1=document.getElementById('cvRegStep1Ind');
  const s2=document.getElementById('cvRegStep2Ind');
  const s3=document.getElementById('cvRegStep3Ind');
  const lines=document.querySelectorAll('.cv-reg-step-line');
  if(s1){ s1.className='cv-reg-step done'; }
  if(s2){ s2.className='cv-reg-step active'; }
  if(s3){ s3.className='cv-reg-step'; }
  if(lines[0]) lines[0].classList.add('done');
  if(lines[1]) lines[1].classList.remove('done');
};
window.cvRegGoStep3 = function(){
  const p1=document.getElementById('cvRegPanel1');
  const p2=document.getElementById('cvRegPanel2');
  const p3=document.getElementById('cvRegPanel3');
  if(p1) p1.style.display='none';
  if(p2) p2.style.display='none';
  if(p3) p3.style.display='';
  const s1=document.getElementById('cvRegStep1Ind');
  const s2=document.getElementById('cvRegStep2Ind');
  const s3=document.getElementById('cvRegStep3Ind');
  const lines=document.querySelectorAll('.cv-reg-step-line');
  if(s1){ s1.className='cv-reg-step done'; }
  if(s2){ s2.className='cv-reg-step done'; }
  if(s3){ s3.className='cv-reg-step active'; }
  lines.forEach(l=>l.classList.add('done'));
  document.getElementById('cvRegPw')?.focus();
};

/* Intercept cvVerifyEmailCode to auto-advance to step 3 */
const _origVerify = window.cvVerifyEmailCode;
if(_origVerify){
  window.cvVerifyEmailCode = function(){
    const result = _origVerify.apply(this, arguments);
    setTimeout(()=>{
      const st = document.getElementById('cvVerifyStatus');
      if(st && st.classList.contains('success')){
        cvRegGoStep3();
      }
    }, 600);
    return result;
  };
}
/* Auto-show code box after send */
const _origSC2 = window.cvSendEmailCode;
if(_origSC2){
  window.cvSendEmailCode = async function(){
    const result = await _origSC2.apply(this, arguments);
    /* فقط نوري صندوق الكود إذا ما كانش خطأ (مثلا الإيميل مسجل) */
    const st = document.getElementById('cvVerifyStatus');
    const isError = st && st.classList.contains('error');
    const box = document.getElementById('cvCodeBox');
    if(box && !isError) setTimeout(()=>{ box.style.display='block'; }, 350);
    return result;
  };
}
/* Password strength on register step 3 */
document.addEventListener('input', function(e){
  if(!e.target || e.target.id !== 'cvRegPw') return;
  const val = e.target.value;
  const meter = document.getElementById('cvPwStrength');
  const fill = document.getElementById('cvPwFill');
  const label = document.getElementById('cvPwLabel');
  if(!meter||!fill||!label) return;
  if(!val){ meter.style.display='none'; return; }
  meter.style.display='flex';
  let score = 0;
  if(val.length>=6) score++;
  if(val.length>=10) score++;
  if(/[A-Z]/.test(val)) score++;
  if(/[0-9]/.test(val)) score++;
  if(/[^a-zA-Z0-9]/.test(val)) score++;
  const levels=[
    {w:'20%',bg:'#e53e3e',key:'pwWeak'},
    {w:'40%',bg:'#ed8936',key:'pwFair'},
    {w:'60%',bg:'#ecc94b',key:'pwMedium'},
    {w:'80%',bg:'#48bb78',key:'pwGood'},
    {w:'100%',bg:'#38a169',key:'pwStrong'},
  ];
  const lv=levels[Math.min(score,4)];
  fill.style.width=lv.w; fill.style.background=lv.bg;
  label.style.color=lv.bg; label.textContent=at(lv.key);
});

/* ── Language Switcher Dropdown ── */
const CV_LANG_META = {
  ar: { flag:'https://flagcdn.com/w40/ma.png', flagAlt:'العربية', code:'عر', rtl:true },
  fr: { flag:'https://flagcdn.com/w40/fr.png', flagAlt:'Français', code:'FR', rtl:false },
  en: { flag:'https://flagcdn.com/w40/us.png', flagAlt:'English', code:'EN', rtl:false },
  es: { flag:'https://flagcdn.com/w40/es.png', flagAlt:'Español', code:'ES', rtl:false },
  de: { flag:'https://flagcdn.com/w40/de.png', flagAlt:'Deutsch', code:'DE', rtl:false },
};
window.cvToggleLangDropdown = function(e){
  e.stopPropagation();
  const btn = e.currentTarget.closest('.cv-lang-switcher');
  const isOpen = btn.classList.contains('open');
  // close all
  document.querySelectorAll('.cv-lang-switcher.open').forEach(el=>el.classList.remove('open'));
  if(!isOpen) btn.classList.add('open');
};
document.addEventListener('click', function(){ document.querySelectorAll('.cv-lang-switcher.open').forEach(el=>el.classList.remove('open')); });
window.cvSelectLang = function(lang, optEl){
  // Update all trigger displays
  const meta = CV_LANG_META[lang] || CV_LANG_META.en;
  document.querySelectorAll('.cv-lang-flag').forEach(el=>{
    el.innerHTML = '<img class="cv-flag-img" src="'+meta.flag+'" alt="'+meta.flagAlt+'">';
  });
  document.querySelectorAll('.cv-lang-code').forEach(el=>el.textContent=meta.code);
  // Update active option
  document.querySelectorAll('.cv-lang-option').forEach(el=>el.classList.remove('active'));
  document.querySelectorAll(`.cv-lang-option[data-lang="${lang}"]`).forEach(el=>el.classList.add('active'));
  // Close dropdowns
  document.querySelectorAll('.cv-lang-switcher.open').forEach(el=>el.classList.remove('open'));
  // Call the existing setLanguage
  if(typeof setLanguage === 'function') setLanguage(lang);
};
// Init trigger display from saved lang
(function(){
  const saved = localStorage.getItem('careviaLanguage') || 'en';
  const meta = CV_LANG_META[saved] || CV_LANG_META.en;
  document.querySelectorAll('.cv-lang-flag').forEach(el=>{
    el.innerHTML = '<img class="cv-flag-img" src="'+meta.flag+'" alt="'+meta.flagAlt+'">';
  });
  document.querySelectorAll('.cv-lang-code').forEach(el=>el.textContent=meta.code);
  document.querySelectorAll(`.cv-lang-option[data-lang="${saved}"]`).forEach(el=>el.classList.add('active'));
  document.querySelectorAll(`.cv-lang-option:not([data-lang="${saved}"])`).forEach(el=>el.classList.remove('active'));
})();

/* ── Hook setLanguage to re-render auth text ── */
if(typeof setLanguage === 'function'){
  const _origSL = setLanguage;
  setLanguage = function(lang){
    _origSL(lang);
    setTimeout(()=>{ injectNavbarAuth(); renderAuthText(); cvRenderResetText(); }, 10);
  };
  window.setLanguage = setLanguage;
}

/* ── Booking Summary View ── */
window.goToBookingSummary = function() {
  // Validate payment method first
  const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked');
  if (!selectedMethod) {
    if (typeof showPopup === 'function') showPopup(dt('pleaseSelectPayment') || 'Please select a payment method.');
    return;
  }
  if (selectedMethod.value === 'card') {
    const cardNumber = document.getElementById('cardNumber')?.value?.replace(/\s+/g,'') || '';
    const cardExpiry = document.getElementById('cardExpiry')?.value?.trim() || '';
    const cardCvv = document.getElementById('cardCvv')?.value?.trim() || '';
    if (!/^\d{16}$/.test(cardNumber)) { if (typeof showPopup === 'function') showPopup(dt('invalidCardNumber') || 'Card number must be 16 digits.'); return; }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardExpiry)) { if (typeof showPopup === 'function') showPopup(dt('invalidExpiry') || 'Invalid expiry.'); return; }
    if (!/^\d{3}$/.test(cardCvv)) { if (typeof showPopup === 'function') showPopup(dt('invalidCvv') || 'CVV must be 3 digits.'); return; }
  }

  // Populate summary client info
  const ci = (typeof clientInfo !== 'undefined') ? clientInfo : {};
  const caregiver = (typeof selectedCaregiverKey !== 'undefined' && selectedCaregiverKey && typeof getLocalizedCaregiver === 'function') ? getLocalizedCaregiver(selectedCaregiverKey) : null;
  const pricing = (typeof window.getPricingDetails === 'function') ? window.getPricingDetails((typeof selectedSlots !== 'undefined') ? selectedSlots.length : 0) : { hourlyRate: 0, travelFee: 0, nightFee: 0, weekendFee: 0, savings: 0, total: 0 };
  const slots = (typeof selectedSlots !== 'undefined') ? selectedSlots : [];
  const service = (typeof selectedService !== 'undefined') ? selectedService : '';
  const date = (typeof selectedDate !== 'undefined') ? selectedDate : '';
  const payMethod = selectedMethod.value === 'card' ? (dt('cardOption') || 'Credit card') : (dt('cashOption') || 'Cash (pay on arrival)');

  function row(label, value) {
    return `<div style="background:var(--card-bg);border-radius:12px;padding:.7rem 1rem;overflow:hidden;min-width:0;"><span style="font-size:.82rem;opacity:.65;display:block;margin-bottom:.2rem;">${label}</span><strong style="font-size:.97rem;display:block;word-break:break-word;overflow-wrap:anywhere;">${value || '—'}</strong></div>`;
  }

  const clientEl = document.getElementById('summaryClientInfo');
  if (clientEl) {
    clientEl.innerHTML =
      row(dt('summaryClient') || 'Client', `${ci.firstName || ''} ${ci.lastName || ''}`.trim()) +
      row('Phone', ci.phone || '—') +
      row('Email', ci.email || '—') +
      row('City', ci.city || '—');
  }

  const tPayment = (translations && translations[currentLang] && translations[currentLang].paymentMethodTitle) ? translations[currentLang].paymentMethodTitle : (dt('paymentMethodTitle') !== 'paymentMethodTitle' ? dt('paymentMethodTitle') : 'Payment');
  const bookingEl = document.getElementById('summaryBookingInfo');
  if (bookingEl) {
    bookingEl.innerHTML =
      row(dt('summaryService') || 'Service', typeof getServiceName === 'function' ? getServiceName(service) : service) +
      row(dt('summaryDate') || 'Date', date) +
      row(dt('summaryHours') || 'Hours', slots.length ? `${slots.join(' · ')} (${slots.length}h)` : '—') +
      row(dt('summaryCaregiver') || 'Caregiver', caregiver ? `${caregiver.name} (${caregiver.rating}/5)` : '—') +
      row(tPayment, payMethod);
  }

  const pricingEl = document.getElementById('summaryPricingInfo');
  if (pricingEl) {
    pricingEl.innerHTML = `
      <div style="display:flex;justify-content:space-between;padding:.45rem 0;border-bottom:1px solid var(--border-color);font-size:.93rem;"><span>${dt('liveEstimateRate') || 'Rate'}</span><span>${pricing.hourlyRate.toFixed(2)} MAD/h</span></div>
      <div style="display:flex;justify-content:space-between;padding:.45rem 0;border-bottom:1px solid var(--border-color);font-size:.93rem;"><span>${dt('liveEstimateTravel') || 'Travel fee'}</span><span>${pricing.travelFee.toFixed(2)} MAD</span></div>
      <div style="display:flex;justify-content:space-between;padding:.45rem 0;border-bottom:1px solid var(--border-color);font-size:.93rem;"><span>${dt('liveEstimateSavings') || 'Discount'}</span><span>-${pricing.savings.toFixed(2)} MAD</span></div>
      <div style="display:flex;justify-content:space-between;padding:.7rem 0;font-size:1.3rem;font-weight:700;color:var(--accent-dark);"><span>${dt('summaryTotal') || 'Total'}</span><span>${pricing.total.toFixed(2)} MAD</span></div>
    `;
  }

  // Reset checkboxes
  const termsCheck = document.getElementById('agreeTermsCheck');
  const disclaimerCheck = document.getElementById('agreeDisclaimerCheck');
  if (termsCheck) termsCheck.checked = false;
  if (disclaimerCheck) disclaimerCheck.checked = false;

  // Update labels border color
  ['termsLabel','disclaimerLabel'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.borderColor = 'var(--border-color)';
  });

  window.updateSummaryConfirmBtn();

  if (typeof navigateTo === 'function') navigateTo('bookingSummaryView');
};

window.openTermsFromSummary = function(e) {
  e.preventDefault();
  e.stopPropagation(); // prevent checkbox from toggling
  window._termsReturnView = 'bookingSummaryView';
  const backLabel = document.getElementById('termsBackLabel');
  if (backLabel) backLabel.textContent = (currentLang === 'ar') ? 'رجوع للملخص' : (currentLang === 'fr') ? 'Retour au résumé' : 'Back to summary';
  navigateTo('termsView');
  window.scrollTo({top: 0, behavior: 'auto'});
};

window.openDisclaimerFromSummary = function(e) {
  e.preventDefault();
  e.stopPropagation();
  window._disclaimerReturnView = 'bookingSummaryView';
  const backLabel = document.getElementById('disclaimerBackLabel');
  if (backLabel) backLabel.textContent = (currentLang === 'ar') ? 'رجوع للملخص' : (currentLang === 'fr') ? 'Retour au résumé' : 'Back to summary';
  navigateTo('disclaimerView');
  window.scrollTo({top: 0, behavior: 'auto'});
};

window.updateSummaryConfirmBtn = function() {
  const terms = document.getElementById('agreeTermsCheck');
  const disclaimer = document.getElementById('agreeDisclaimerCheck');
  const btn = document.getElementById('summaryConfirmBtn');
  const termsLabel = document.getElementById('termsLabel');
  const disclaimerLabel = document.getElementById('disclaimerLabel');

  const bothChecked = terms?.checked && disclaimer?.checked;

  if (btn) {
    btn.disabled = !bothChecked;
    btn.style.opacity = bothChecked ? '1' : '0.5';
    btn.style.cursor = bothChecked ? 'pointer' : 'not-allowed';
  }
  if (termsLabel) termsLabel.style.borderColor = terms?.checked ? 'var(--accent-contrast)' : 'var(--border-color)';
  if (disclaimerLabel) disclaimerLabel.style.borderColor = disclaimer?.checked ? 'var(--accent-contrast)' : 'var(--border-color)';
};

/* Also update the processPayment confirm button selector to use the summary view button */
(function() {
  const _origPP = window.processPayment;
  if (typeof _origPP === 'function') {
    window.processPayment = async function() {
      const confirmBtn = document.getElementById('summaryConfirmBtn');
      if (confirmBtn) {
        confirmBtn.textContent = dt('submitting') || 'Submitting...';
        confirmBtn.disabled = true;
        confirmBtn.style.opacity = '0.6';
      }
      try {
        await _origPP.apply(this, arguments);
      } finally {
        if (confirmBtn) {
          if (typeof setLanguage === 'function') setTimeout(() => setLanguage(currentLang), 50);
          confirmBtn.disabled = false;
          confirmBtn.style.opacity = '1';
        }
      }
    };
  }
})();

})();
