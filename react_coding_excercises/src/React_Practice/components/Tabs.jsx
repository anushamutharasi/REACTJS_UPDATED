export default function Tabs({children,buttons,...props}){
    const {ButtonsContainer}={...props}
    return (
      <>
        <ButtonsContainer style={{ display: "flex", gap: "20px" }}>{buttons}</ButtonsContainer>
        {children}
      </>
    );
}