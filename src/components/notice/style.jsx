import styled, { css } from "styled-components";

export const ScrollableContainer = styled.div`
  width: 100%;
  height: 100vh; /* 부모 컨테이너의 높이를 화면 높이로 설정 */
  overflow: auto; /* 컨텐츠가 넘칠 경우 스크롤 생기게 설정 */
`;

export const Title = styled.div`
  color: var(--use-font-font---head, #151515);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.48px;
  padding: 0px 20px;
  margin-bottom: 16px;
`;
export const Detail = styled.div`
  color: var(--use-font-font---head, #151515);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.25px;
  flex: 1 0 0;
  padding: 0px 20px;
  align-items: center;
`;
export const DetailBox = styled.div`
  margin-left: 5%;
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center;
  padding: 12px 12px;
  gap: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: var(--use-background-background---section, #fbfbfb);
  width: 90%;
  margin-bottom: 24px;
`;
export const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Information = styled.div`
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center;
  margin-bottom: 12px;
  color: var(--use-font-font---info, #929292);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
`;
export const SeparationBar = styled.div`
  width: 100%;
  height: 4px;
  background: var(--use-background-background---deep, #f1f1f1);
  margin: 24px 0px;
`;
export const ReplyLine = styled.div`
  width: 100%;
  height: 4px;
  background: var(--use-background-background---deep, #f1f1f1);
  margin: 24px 0px;
`;
export const ReplyBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-bottom: 24px;
`;
export const ReplyStart = styled.div`
  color: var(--use-font-font---head, #151515);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
  letter-spacing: -0.2px;
  margin-right: 8px;
`;
export const ReplyCount = styled.div`
  color: var(--use-font-font---info, #929292);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.25px;
`;
export const ReplyAllBox = styled.div`
  margin: 0px 20px;
  border-bottom: 1px solid var(--use-stroke-stroke---disable, #e2e3ec);
`;
export const Reply = styled.div`
  color: var(--use-font-font---body, #474747);
  /* Body2 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.25px;
  margin-bottom: 12px;
`;
export const ReplySub = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ReplyData = styled.div`
  color: var(--use-font-font---info, #929292);

  /* Body3 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
`;
export const ReplyDelete = styled.div`
  color: var(--use-font-font---info, #929292);

  /* Body3 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 390px;
  margin: 0 auto; /* 부모 요소를 화면 중앙에 배치 */
`;

export const ImageNotice = styled.img`
  max-width: 100%; /* 이미지의 너비를 부모 요소에 맞춤 */
  max-height: 100%; /* 이미지의 높이를 부모 요소에 맞춤 */
  flex-shrink: 0;
`;

export const RightButton = styled.button`
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  fill: var(--use-background-background---deep, #f1f1f1);
  background-color: rgba(241, 241, 241, 1);
  position: absolute;
  border-radius: 20%;
  right: 0;
  &::before {
    content: ">";
    font-size: 16px;
    color: white;
  }
`;

export const LeftButton = styled.button`
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  fill: var(--use-background-background---deep, #f1f1f1);
  background-color: rgba(241, 241, 241, 1);
  border-radius: 20%;
  position: absolute;
  left: 0;
  &::before {
    content: "<";
    font-size: 16px;
    color: white;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 32px;
`;

export const Dot = styled.div`
  width: 12px;
  height: 6px;
  margin: 0 4px;
  background: var(--use-background-background---deep, #f1f1f1);
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.active &&
    css`
      width: 36px;
      background: var(--main-red-100, #fa9487);
      border-radius: 8px;
    `}
`;
export const BottomBox = styled.div`
  display: flex;
  padding: 12px 20px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-top: 1px solid var(--use-stroke-stroke---disable, #e2e3ec);
  background: #fff;
  box-shadow: 0px -2px 4px 0px rgba(226, 230, 239, 0.25);
  border: 1px solid red;
`;
export const HeartButton = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;
export const WriteReply = styled.div`
  display: flex;
  padding: 12px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 8px;
  background: var(--use-background-background---section, #fbfbfb);
`;
export const SendReply = styled.div``;

//Notice css

export const NoticeTitleWrapper = styled.div`
  display: flex;
  gap: 8px;
  /* align-items: flex-start; */
  color: var(--use-font-font---info, #929292);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin-top: 32px;
  margin-bottom: 24px;
  margin-left: 15px;
`;

export const CardWrapper = styled.div`
  display: grid;
  flex-direction: column;
  align-items: flex-start;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: row;
  gap: 0px 16px;
  padding: 0px 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin-bottom: 44px;
`;

export const CardTitle = styled.div`
  color: var(--use-font-font---body, #474747);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
  letter-spacing: -0.16px;
`;

export const CardDescription = styled.div`
  height: 32px;
  align-self: stretch;
  color: var(--use-font-font---info, #929292);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
  text-align: left;
`;
export const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: var(--use-background-background---deep, #f1f1f1);
  object-fit: cover;
`;
export const CardImgContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
`;
