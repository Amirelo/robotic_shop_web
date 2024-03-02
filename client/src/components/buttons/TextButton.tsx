import CustomText from "../CustomText";

interface Props {
  children: string;
  marginBottom?: React.CSSProperties['marginBottom']
}

const TextButton = (props: Props) => {
  return (
    <button style={{backgroundColor:'green', paddingInline:20, borderRadius:4, marginBottom: props.marginBottom}}>
      <CustomText preset={"title"}>{props.children}</CustomText>
    </button>
  );
};

export default TextButton;
