const TipoFattura = {
    STD: 'STD' as 'STD',
    PRE: 'PRE' as 'PRE'
}
type TipoFattura = (typeof TipoFattura)[keyof typeof TipoFattura];
export { TipoFattura };
