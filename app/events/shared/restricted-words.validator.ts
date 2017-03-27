import { FormControl } from '@angular/forms'

export function restrictedWords(words) {
    return (control: FormControl): {[key: string]: any} => {
        if (!words) return null

        var invalidWords = words
            .map(w => control.value.includes(w) ? w : null)
            .filter(w => w != null)

        return invalidWords && invalidWords.length > 0 ? {'restrictedWords': invalidWords.join(', ')} : null
    }
}

//could be made better
export function weekdaysOnly() {
    return (control: FormControl): {[key: string]: any} => {
        var day = new Date(control.value).getDay()
        
        if (day === 6) {
        return {'weekdaysOnly': 'Saturday'}
        } else if (day === 0) {
        return {'weekdaysOnly': 'Sunday'}
        }
        
        return null
    }
}