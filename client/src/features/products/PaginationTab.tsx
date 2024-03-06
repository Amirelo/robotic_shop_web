import React from "react";
import { ic_chevron_left, ic_chevron_right } from "../../assets/icons";
import { CustomImage, CustomText } from "../../components";

interface Props {
  data: Array<any>;
  itemPerPage: number;
  numOfTabs: number;
  currentPage: number;
  pageChanged(pageNum: number): any;
}

const PaginationTab = (props: Props) => {
  const onChevronPressed = (amount: number) => {
    if (
      props.currentPage + amount >= 1 &&
      props.currentPage + amount <= props.numOfTabs
    ) {
      console.log("currentpage:", props.currentPage + amount);
      props.pageChanged(props.currentPage + amount);
    }
  };

  return (
    <div style={styles.body}>
      <CustomImage
        src={ic_chevron_left}
        preset={"box"}
        onClick={() => onChevronPressed(-1)}
      />

      {props.numOfTabs >= 1 ? (
        [
          props.currentPage > props.numOfTabs - 3 ? (
            <CustomText preset={"box"}>..........</CustomText>
          ) : (
            <></>
          ),
          Array.from(
            Array(props.numOfTabs).slice(
              0,
              props.numOfTabs > 3 && props.currentPage < props.numOfTabs - 3
                ? 3
                : 6
            ),
            (e, k) => {
              return k + 1 + (props.currentPage - 2) > 0 &&
                k + 1 + (props.currentPage - 3) < props.numOfTabs ? (
                <CustomText
                  preset={"box"}
                  onClick={() =>
                    props.pageChanged(k + 1 + (props.currentPage - 2))
                  }
                >
                  {(k + 1 + (props.currentPage - 2)).toString()}
                </CustomText>
              ) : (
                <></>
              );
            }
          ),

          props.numOfTabs > 3 && props.currentPage < props.numOfTabs - 3 ? (
            <CustomText preset={"box"}>..........</CustomText>
          ) : (
            <></>
          ),

          props.numOfTabs > 6 && props.currentPage < props.numOfTabs - 3 ? (
            Array.from(
              Array(props.numOfTabs).slice(
                props.numOfTabs - 3,
                props.numOfTabs
              ),
              (e, k) => {
                return (
                  <CustomText
                    preset={"box"}
                    onClick={() =>
                      props.pageChanged(props.numOfTabs - 3 + k + 1)
                    }
                  >
                    {(props.numOfTabs - 3 + k + 1).toString()}
                  </CustomText>
                );
              }
            )
          ) : (
            <></>
          ),
        ]
      ) : (
        <></>
      )}

      <CustomImage
        src={ic_chevron_right}
        preset={"box"}
        onClick={() => onChevronPressed(1)}
      />
    </div>
  );
};

export default PaginationTab;

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    display: "flex",
    gap: 8,
    justifyContent: "center",
    marginBottom: 20,
  },
};
