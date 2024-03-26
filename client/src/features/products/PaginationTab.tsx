// React and libs
import React from "react";

// Assets
import { ic_chevron_left, ic_chevron_right } from "../../assets/icons";

// Components
import { CustomImage, CustomText } from "../../components";

// Properties
interface Props {
  data: Array<any>;
  itemPerPage: number;
  numOfTabs: number;
  currentPage: number;
  pageChanged(pageNum: number): any;
}

const PaginationTab = (props: Props) => {
  // Change page on Chevron clicked
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
      {/* Back button */}
      <CustomImage
        src={ic_chevron_left}
        preset={"box"}
        onClick={() => onChevronPressed(-1)}
      />

      {/* First 3 pages */}
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

          // Middle when pages > 6
          props.numOfTabs > 3 && props.currentPage < props.numOfTabs - 3 ? (
            <CustomText preset={"box"}>..........</CustomText>
          ) : (
            <></>
          ),

          // Last 3 pages when total number of pages > 6
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

      {/* Forward button */}
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
