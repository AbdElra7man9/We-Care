import DoctorWraper from "./DoctorWraper";

export const metadata = {
  title: "Doctor Dashboard",
};
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <DoctorWraper>
      {children}
    </DoctorWraper>
  );
}
