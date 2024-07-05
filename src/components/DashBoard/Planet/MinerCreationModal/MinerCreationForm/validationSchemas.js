import * as yup from 'yup';

export const minerCreationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .test(
      'unique-name',
      'A miner with this name already exists',
      (value, context) =>
        !context.parent.miners.some((miner) => miner.name === value)
    ),
  carryCapacity: yup
    .number()
    .required('Carry Capacity is required')
    .min(1, 'Carry Capacity must be greater than 0'),
  travelSpeed: yup
    .number()
    .required('Travel Speed is required')
    .min(1, 'Travel Speed must be greater than 0'),
  miningSpeed: yup
    .number()
    .required('Mining Speed is required')
    .min(1, 'Mining Speed must be greater than 0'),
});
