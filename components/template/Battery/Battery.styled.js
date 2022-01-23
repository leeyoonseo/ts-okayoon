import styled from 'styled-components';

export const BatteryWrapper = styled.div`
  height: 18px;
`;

export const BatteryOutline = styled.div`
  display: inline-block;
  width: 20px;
  height: 12px;
  border: 1px solid white;
  border-radius: 3px;
  vertical-align: middle;
`;

export const BatteryGauge = styled.div`
  display: block;
  content: '';
  height: 100%;
  background-color: white;
`;
