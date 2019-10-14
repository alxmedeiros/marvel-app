/*
 * Reducer actions related with navigation
 */
import NavigationService from 'app/navigation/NavigationService';

export function navigateToHome(params) {
    NavigationService.navigate('App', params);
}

export function navigateToDetail() {
    NavigationService.navigate('Detail');
}