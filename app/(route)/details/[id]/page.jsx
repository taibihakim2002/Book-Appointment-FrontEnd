import Details from "./_components/Detail";

const Page = ({ params }) => {
  // بريد إلكتروني وهمي لتمريره للمكونات الابناء
  const mockUserEmail = "guest@example.com";

  return (
    <>
      {/* بما أننا نستخدم بيانات وهمية، سنقوم بعرض المكون مباشرة 
        دون التحقق من المستخدم (user?) لأننا نفترض أنه مسجل الدخول 
      */}
      <Details 
        params={params} 
        userEmail={mockUserEmail} 
      />
    </>
  );
};

export default Page;