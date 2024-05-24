import React from 'react';
import * as S from './style';
import ResetIcon from '../../../../public/booth/reset.svg';

const Category = ({ category, setCategory, resetData }) => {
  return (
    <S.CategoryWrapper>
      <S.CategoryItems>
        <S.CategoryItem
          onClick={() => setCategory('부스')}
          bgcolor={category === '부스' ? '#f97c69' : ' #ffffff'}
          color={category === '부스' ? '#FFFFFF' : ' #C4C4C4'}
          border={category === '부스' ? 'none' : ' #e2e3ec'}
        >
          부스
        </S.CategoryItem>
        <S.CategoryItem
          onClick={() => setCategory('푸드트럭')}
          bgcolor={category === '푸드트럭' ? '#f97c69' : ' #ffffff'}
          color={category === '푸드트럭' ? '#FFFFFF' : ' #C4C4C4'}
          border={category === '푸드트럭' ? 'none' : ' #e2e3ec'}
        >
          푸드트럭
        </S.CategoryItem>
      </S.CategoryItems>

      <S.CategoryReset>
        <S.CategoryResetImg src={ResetIcon} />
        <S.CategoryResetText onClick={resetData}>초기화</S.CategoryResetText>
      </S.CategoryReset>
    </S.CategoryWrapper>
  );
};

export default Category;
